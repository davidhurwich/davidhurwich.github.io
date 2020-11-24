var clicks = 0;
var sound;
var img;

function preload() {
  img = loadImage('https://evahwu.github.io/DES427_Assignment1/flower_background.jpg');
}

function setup() {
  createCanvas(350, 600);
  background(255, 219, 231);
  image(img, 0, 0);
}

function draw() {
  noStroke();
  fill(255, 255, 39);
  ellipse(160, 150, 100, 100);
 
   petals();
}

function petals() {
  push();
  if (clicks >= 1) {

noStroke();
  fill(255, 182, 193);

  translate(160, 150); //changes 0,0 point to 350, 150
  rotate(radians(40));
  ellipse(75, 0, 150, 50);
  }
  if (clicks >= 2) {
rotate(radians(40));
  ellipse(75, 0, 150, 50);
  }
  if (clicks >= 3) {
rotate(radians(40));
  ellipse(75, 0, 150, 50);
  }
  if (clicks >= 4) {
  rotate(radians(40));
  ellipse(75, 0, 150, 50);
  }
  if (clicks >= 5) {
    rotate(radians(40));
  ellipse(75, 0, 150, 50);
  }
    if (clicks >= 6) {
     rotate(radians(40));
  ellipse(75, 0, 150, 50);
  }
    if (clicks >= 7) {
     rotate(radians(40));
  ellipse(75, 0, 150, 50);
  }
    if (clicks >= 8) {
     rotate(radians(40));
  ellipse(75, 0, 150, 50);
  }
    if (clicks >= 9) {
     rotate(radians(40));
  ellipse(75, 0, 150, 50);
    }
}

function mouseClicked() {
  clicks++;

  if (clicks == 1 || 9) {
    sound = createAudio('https://evahwu.github.io/DES427_Assignment1/Flower.mp3');
    sound.autoplay(true);
  }
}