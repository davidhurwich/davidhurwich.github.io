var clicks = 0;
var eyes = false;
var nose = false;
var mouth = false;
var img;

function preload() {
  img = loadImage('backgroundImageHalloween.jpg');


function setup() {
  createCanvas(600, 450);
  ele = createAudio('backgroundSound.mp3');
  ele.autoplay(true);
  image(img, 0, 0);
}

function draw() {
  background(150);
  fill('#000000');
  textSize(24);
  text('Click to Start', 50, 50);


  // Base Jackolatern
  if (clicks >= 1) {
    noStroke();
    fill('#eb6d00');
    ellipse(200, 200, 150, 185);
    ellipse(275, 200, 150, 200);
    ellipse(350, 200, 150, 185);
  }
  //eyes 
  if (clicks >= 2) {
    fill('yellow');
    triangle(200, 200, 225, 150, 250, 200);
    triangle(300, 200, 325, 150, 350, 200);
  }
  // mouth
  if (clicks >= 3) {
    arc(275, 235, 100, 80, 0, PI);
    fill('#eb6d00');
    triangle(225, 200, 250, 270, 275, 200);
    triangle(260, 200, 285, 270, 310, 200);
  }
  if (clicks >=4) { 
  textSize(40);
  text('Happy Halloween', 50, 50);
  }
}

function mouseClicked() {
  clicks++;

}