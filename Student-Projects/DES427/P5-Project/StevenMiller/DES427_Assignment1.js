let randomColors = ['rgba(196,92,188,0.5)', 'rgba(92,196,167,0.75)','rgba(43,158,187,0.5)']
let buttonOn = false;
let music;
let audio1;
let audio2;
let audio3;

function preload() {
  music = loadSound("House_Of_Pain_Jump_Around.mp3");
  audio1 = loadSound("Crash_Cymbal.mp3");
  audio2 = loadSound("DJ_Scratch.mp3");
  audio3 = loadSound("DJ_Stop.mp3");
  
}

function setup() {
  createCanvas(720, 600);
  frameRate(8);
}

function draw() {
  let bgColor = 'black';
  if (buttonOn === true) {
    bgColor = random(randomColors);
    buttonLight = 'green';
  }
  if (buttonOn === false) {
    buttonLight = 'lightgrey'
  }
  background(bgColor);
  fill('#28252a');
  quad(20, 100, 700, 100, 700, 500, 20, 500);
  fill('black');
  circle(150, 300, 250);
  circle(570, 300, 250);
  fill('darkred');
  circle(150, 300, 100);
  circle(570, 300, 100);
  fill('black');
  circle(150, 300, 10);
  circle(570, 300, 10);
  fill(buttonLight);
  square(335, 400, 50);
  if (buttonOn === true) {
    fill('black');
    textSize(12);
    text('BS/', 351, 420);
    text('OFF', 349, 435);
  }
  if (buttonOn === false) {
    fill('black');
    textSize(12);
    text('ENTER/', 336, 420);
    text('ON', 349, 435);
  }
  line(320, 200, 320, 350);
  line(360, 200, 360, 350);
  line(400, 200, 400, 350);
  fill("lightgrey");
  square(310, 320, 20);
  square(350, 240, 20);
  square(390, 270, 20);
  fill("hotpink");
  square(270, 140, 40);
  fill("blue");
  square(340, 140, 40);
  fill("yellow");
  square(410, 140, 40);
}

function keyPressed() {
  if (keyCode === ENTER) {
    music.play();
    buttonOn = true;
}
  if (keyCode === BACKSPACE) {
    music.stop();
    buttonOn = false;
}
}

function mouseClicked() {
  if (mouseX > 270 && mouseX < 310 && mouseY > 140 && mouseY < 180) {
      audio1.play()
  }
  if (mouseX > 340 && mouseX < 380 && mouseY > 140 && mouseY < 180) {
    audio2.play()
  }
  if (mouseX > 410 && mouseX < 450 && mouseY > 140 && mouseY < 180) {
    audio3.play()
  }
}