let img;

function preload() {
  img = loadImage('warhol.jpg');
}

function setup(){
    createCanvas(500,500);
    background(200);
    image(img, 0, 0);
  filter(BLUR, 3);
}

function draw(){
    
}
