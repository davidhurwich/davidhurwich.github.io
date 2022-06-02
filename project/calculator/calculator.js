let arrayNumbers = [];
let num1, num2, num3, num4, num5, num6, num7, num8, num9, totalPrint, total = 0;
let operAdd, operSub, operMult, operDiv, operEqual;
let counter = 0;



function setup() {
    // selections
    let newNumber = new Number();
    arrayNumbers.push(newNumber);
    totalPrint = select("#total");
    num1 = select("#num-1");
    num2 = select("#num-2");
    num3 = select("#num-3");
    num4 = select("#num-4");
    num5 = select("#num-5");
    num6 = select("#num-6");
    num7 = select("#num-7");
    num8 = select("#num-8");
    num9 = select("#num-9");
    num0 = select("#num-0");
    num0 = select("#num-0");

    operAdd = select("#operator-plus");
    operEqual = select("#operator-equal");

    num1.mousePressed(num1Function);
    num2.mousePressed(num2Function);
    num3.mousePressed(num3Function);
    num4.mousePressed(num4Function);
    num5.mousePressed(num5Function);
    num6.mousePressed(num6Function);
    num7.mousePressed(num7Function);
    num8.mousePressed(num8Function);
    num9.mousePressed(num9Function);
    num0.mousePressed(num0Function);
    operAdd.mousePressed(operatorAdd);
    operEqual.mousePressed(operatorEqual);
}

function num1Function() {
    updateScreen(1);
}

function num2Function() {
    updateScreen(2);

}

function num3Function() {
    updateScreen(3);

}

function num4Function() {
    updateScreen(4);
    number = 4;
}

function num5Function() {
    updateScreen(5);
}

function num6Function() {
    updateScreen(6);
}

function num7Function() {
    updateScreen(7);
}

function num8Function() {
    updateScreen(8);
}

function num9Function() {
    updateScreen(9);
}

function num0Function() {
    updateScreen(0);
}

function updateScreen(number) {

    arrayNumbers[counter].updateNumber(number);

}

function operatorAdd() {
  
    totalPrint.html("");
    let newNumber = new Number();
    arrayNumbers.push(newNumber);
    counter ++;
    operatorEqual();
}

function operatorSubtract(){

}




function operatorEqual(){
    let a = 0;
    for(i = 0; i < arrayNumbers.length; i++){
        a += arrayNumbers[i].total();
    }
    totalPrint.html(a);
}

function operator(operator, number) {
    if (operator === "+") {
        total += number;
    }
}



class Number {
    constructor() {
        this.place1 = true;
        this.place10 = false;
        this.place100 = false;
        this.place1000 = false;
        this.place1Num = 0;
        this.place10Num = 0;
        this.place100Num = 0;
        this.place1000Num = 0;
    }

    updateNumber(number) {
        if (this.place1 === true) {
            this.place1Num = number;
            this.place1 = false;
            this.place10 = true;
        } else if (this.place10 === true) {
            this.place10Num = this.place1Num * 10;
            this.place1Num = number;
            this.place10 = false;
            this.place100 = true;
        } else if (this.place100 === true) {
            this.place100Num = this.place10Num * 10;
            this.place10Num = this.place1Num * 10;
            this.place1Num = number;
            this.place100 = false;
            this.place1000 = true;
        } else if (this.place1000 === true) {
            this.place1000Num = this.place100Num * 10;
            this.place100Num = this.place10Num * 10;
            this.place10Num = this.place1Num * 10;
            this.place1Num = number;
            this.place100 = false;
            this.place1000 = true;
        }


        totalPrint.html(this.place1Num + this.place10Num + this.place100Num + this.place1000Num);
    }


    total() {
        let a = this.place1Num + this.place10Num + this.place100Num + this.place1000Num;
        return a;
    }

}