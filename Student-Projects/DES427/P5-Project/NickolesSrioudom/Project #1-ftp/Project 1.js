let r, g, b, o;

function setup(){
    createCanvas(700,500);
    r = random(300);
    g = random(300);
    b = random(300);
    o = random(300);
    
}

function draw(){
    background(220);
    fill(r, g, b, o, 200);
    square(400,325,75);
    circle(400,325,73);
    square(400,325,60);
    circle(400,325,54);
    circle(340,170,54);
    square(330,110,75);
    circle(200,100,78);
    rect(40,120,120,40);
    textSize(21)
    text('click on the bottom left shapes to change colors',200,500);
    fill(80,102,153);
}

function mousePressed(){
let d = dist(mouseX,mouseY,400,325);
if (d < 100) {
    r = random(300);
    g = random(300);
    b = random(300);
    o = random(300);
  }
}

