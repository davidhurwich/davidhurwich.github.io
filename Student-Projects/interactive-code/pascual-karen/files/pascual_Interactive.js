let x=0;
var arrow,pumpkin,pumpkin2,pumpkin3,pumkin4,flowers,flowers2,flowers3,flowers4,flowers5,bob,bob2,bob3,bob4,bob5;
let music;
var music2;
let right;
let image1;
let image1a;
let image1b;
let image2ab;
let image3b;
let image3a;

let fly;
let flowerBackground;

function preload() {
  
  music=createAudio('https://kappa303.github.io/pascual_Interactive/Mellow%20Vibelofi%20study%20mix.mp3');
  music2=createAudio('https://kappa303.github.io/pascual_Interactive/Mario%20Jump%20-%20Gaming%20Sound%20Effect%20(HD).mp3');
  arrow = createImg("https://kappa303.github.io/pascual_Interactive/images/arrow90.gif");   
   pumpkin = createImg("https://kappa303.github.io/pascual_Interactive/images/pumpkin.gif");   
   pumpkin2 = createImg("https://kappa303.github.io/pascual_Interactive/images/pumpkin.gif");  
  pumpkin3 = createImg("https://kappa303.github.io/pascual_Interactive/images/pumpkin.gif");  
  pumpkin4 = createImg("https://kappa303.github.io/pascual_Interactive/images/pumpkin.gif"); 
  
  
   flowers = createImg("https://kappa303.github.io/pascual_Interactive/images/20PercFlowers.gif"); 
  flowers2 = createImg("https://kappa303.github.io/pascual_Interactive/images/20PercFlowers.gif"); 
  flowers3 = createImg("https://kappa303.github.io/pascual_Interactive/images/20PercFlowers.gif"); 
  flowers4 = createImg("https://kappa303.github.io/pascual_Interactive/images/20PercFlowers.gif"); 
   flowers5 = createImg("https://kappa303.github.io/pascual_Interactive/images/20PercFlowers.gif"); 
   bob = createImg("https://kappa303.github.io/pascual_Interactive/images/bob.gif"); 
   bob2 = createImg("https://kappa303.github.io/pascual_Interactive/images/bob.gif"); 
   bob3 = createImg("https://kappa303.github.io/pascual_Interactive/images/bob.gif"); 
   bob4 = createImg("https://kappa303.github.io/pascual_Interactive/images/bob.gif"); 
  bob5 = createImg("https://kappa303.github.io/pascual_Interactive/images/bob.gif"); 

  image1=loadImage('https://kappa303.github.io/pascual_Interactive/images/1.png');
  image1a=loadImage('https://kappa303.github.io/pascual_Interactive/images/1a.png');
 image8b=loadImage('https://kappa303.github.io/pascual_Interactive/images/8b.png');  image2ab=loadImage('https://kappa303.github.io/pascual_Interactive/images/2ab.png');
 image3b=loadImage('https://kappa303.github.io/pascual_Interactive/images/3b.png'); 
  image3a=loadImage('https://kappa303.github.io/pascual_Interactive/images/3a.png'); 
   fly=loadImage('https://kappa303.github.io/pascual_Interactive/images/fly.png'); 

}


function setup() {
  
/*
FIRST
fill('#197278');
  text(' LETS TAKE A BREAK!',270,490);
  image(image2ab,180,90);
   arrow.position(290,340);
   
   SECOND
*/
  createCanvas(600, 600);
  arrow.position(-600,-600);
  pumpkin.position(-600,-600);
  flowers.position(-600,-600);
  pumpkin2.position(-600,-600);
  flowers2.position(-600,-600);
  pumpkin3.position(-600,-600);
  flowers3.position(-600,-600);
  pumpkin4.position(-600,-600);
  flowers4.position(-600,-600);
  flowers5.position(-600,-600);
  bob.position(-600,-600);
  bob2.position(-600,-600);
  bob3.position(-600,-600);
  bob4.position(-600,-600);
  bob5.position(-600,-600);
  background('#fff1e6');
  fill('#197278');
  text('LETS TAKE A BREAK!',410,400);
  text('CLICK ME',410,380);
  image(image2ab,140,90);
   arrow.position(290,340);
    music.autoplay(true);
}

function mousePressed() {
  if(x===0){
  background('#e0e2db');
  rect(0, 400, 600);
  text('HELP ME MAKE A GARDEN',225,350); 
  text('CLICK TO PLANT MY FLOWERS',225,370);  
 
  image(image3b,180,90);
  arrow.position(-600,-600);
  print(x);
  x=+1;}
  else if(x===1){
    flowers.position(mouseX,mouseY);
    bob.position(mouseX+60,mouseY+60);
    x=x+1;
    music2.play();
    print(x);
    
  }else if(x===2){
    pumpkin.position(mouseX,mouseY);
    x=x+1;
    music2.play();
    print(x);
  }else if(x===3){
     flowers2.position(mouseX,mouseY);
    bob2.position(mouseX+60,mouseY+60);
    music2.play();
    x=x+1;
    print(x);
  }else if(x===4){
    pumpkin2.position(mouseX,mouseY);
    music2.play();
    x=x+1;
    print(x);
  }
  else if(x===5){
     flowers3.position(mouseX,mouseY);
    bob3.position(mouseX-50,mouseY-50);
    music2.play();
    x=x+1;
    print(x);
  }
  else if(x===6){
    pumpkin3.position(mouseX,mouseY);
    music2.play();
    x=x+1;
    print(x);
  }
  else if(x===7){
     flowers4.position(mouseX,mouseY);
    bob4.position(mouseX-100,mouseY-100);
    music2.play();
    x=x+1;
    print(x);
  }
  else if(x===8){
    pumpkin4.position(mouseX,mouseY);
    music2.play();
    x=x+1;
    print(x);
  }
  else if(x===9){
    flowers5.position(mouseX,mouseY);
    bob5.position(mouseX-100,mouseY-100);
    music2.play();
    x=x+1;
    print(x);
  }
   else if(x===10){
     background('#e0e2db');
     image(fly,180,90);
     text('I LOVE IT!!!!',120,120);
     rect(0, 400, 600);
     music2.play();
    x=x+1;
    print(x);
  }
   else{
     background('#e0e2db');
     image(image3a,180,90);
     text('WE WASTED TO MUCH TIME',120,70);
     text('LETS GET BACK TO WORK!!!',120,90);
     music2.play();
  
  }
  
  
}

