let popAudio;

function preload(){ 
  
  popAudio =
  createAudio('https://freesound.org/s/372182.mp3');

}

function setup() {


  createCanvas(500, 500);
  background("#B0EDFA");
  translate(250, 265);

  //strings
  stroke("black");
  rect(200, -56,1, 250);
  rect(-200, -56, 1, 250);
  rect(60, -56, 1, 250);
  rect(-60, -56, 1, 250);
  
  //redballoon
  fill("#F07471")
  stroke("#F03936")
  triangle(-190, -50, -200, -100, -210, -50)
  ellipse(-200,-100, 60, 80);
  

  //yellowballoon
  fill("#FAEC90");
  stroke("#FADA29");
  strokeWeight(3);
  triangle(-50, -50, -60, -100, -70, -50);
  ellipse(-60,-100, 60, 80);

  //purpleballoon
  fill("#8996FF");
  stroke("#031EFF");
  strokeWeight(3);
   triangle(190, -50, 200, -100, 210, -50);
   ellipse(200,-100, 60, 80);


  //greenballoon
  fill("#A9FFBF");
  stroke("#00FF94");
  strokeWeight(3);
  triangle(50, -50, 60, -100, 70, -50);
  ellipse(60,-100, 60, 80);



}


var number = 0;

function mouseClicked () {
  console.log('mouseClicked = ' + number);
  number++;

let R = random(255);
let G = random(255);
let B = random(255);
  
var circleX = random(0, 500);
var circleY = random(0, 500);
  

if (number > 10){
circle(circleX, circleY, 10);
fill(R, G, B);
stroke(R,G,B);


} else {
circle(circleX, circleY, 20);
fill(R, G, B);
stroke(R,G,B);}

popAudio.autoplay(true);


}



function draw() {



}