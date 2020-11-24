let radio;
let radio2;
let elvis;

let currentImage = true
let isPlaying = false

function preload() {
    radio = loadImage('BoomBox.png');
    radio2 = loadImage('BoomBox2.png');
    elvis = loadSound('ElvisPresley.mp3');

}


function setup() {
    createCanvas(1000, 600);
    background('#f2cffa');
}

function mouseMoved() {
    if (mouseX < 300 && mouseY < 300) {
        background('#ff0080');
    } else if (mouseX < 600 && mouseY < 300) {
        background('#00fff7');
    } else if (mouseX < 1000 && mouseY < 300) {
        background('#00ff9d');
    } else if (mouseX < 300 && mouseY < 600) {
        background('#7e00fc');
    } else if (mouseX < 300 && mouseY < 600) {
        background('#fcd600');
    } else if (mouseX < 1000 && mouseY < 600) {
        background('#280eed');
    }

}

function draw() {
    if (currentImage === true) {
        image(radio, 240, 100);
    } else if (currentImage === false) {
        image(radio2, 240, 100);
    }
    textSize(24);
    text('Hey - press play', 450, 40);
}

function mouseClicked() {
    if (currentImage === true) {
        currentImage = false;
    } else if (currentImage === false) {
        currentImage = true;
    }

    //    440 - 503 285 - 328
    if (mouseX > 440 && mouseX < 503 && mouseY > 285 && mouseY < 328) {
        music()
    }
}

function keyPressed() {
    if (keyCode === 32) {
        music()
    }
}

function music() {
    if (isPlaying === true) {
        elvis.stop();
        isPlaying = false;
    } else if (isPlaying === false) {
        elvis.play();
        isPlaying = true;
    }
}
