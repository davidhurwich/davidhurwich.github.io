var pAudio, oAudio, tAudio;
let imgOnOff;
let img01,img02,img03;
let gif01;

function preload(){
  pAudio = loadSound('https://neoliu28.github.io/mp3/whatswrong.mp3');
  oAudio = loadSound('https://neoliu28.github.io/mp3/RNBALLN.mp3');
  tAudio = loadSound('https://neoliu28.github.io/mp3/LUFE.mp3');
  imgOnOff=loadImage('https://neoliu28.github.io/MVP/imgStartStop.jpg');
  img01=loadImage('https://neoliu28.github.io/MVP/imgSong1.jpg');
  img02=loadImage('https://neoliu28.github.io/MVP/imgSongTwo.jpg');
  img03=loadImage('https://neoliu28.github.io/MVP/imgSongThree.jpg');

  gif01= loadImage('https://neoliu28.github.io/mp3/circleGif01.gif');
  gif01= createImg('https://neoliu28.github.io/mp3/circleGif01.gif', 'the p5 magenta asterisk');


    }

function setup() {
  createCanvas(800, 800);
  background(imgOnOff);
   pAudio.setVolume(0.3);                 //songs' volume
   oAudio.setVolume(0.3); 
   tAudio.setVolume(0.3);
   gif01=gif01.position(300, 300, 200, 200); //animation
   

 }

                            //pause function
function keyPressed()       //press any key on the keyboard
{                           // to stop
 pAudio.pause();      
 oAudio.pause();
 tAudio.pause();
 background(imgOnOff);}

//music player
function mouseClicked() {
  if(mouseX>70&&mouseX<115,mouseY>230&&mouseY<280){  
    pAudio.play();                                   // click the up-left circle 
     background(img01);}                             
  
  else if(mouseX>470&&mouseX<550,mouseY>456&&mouseY<550) 
       {                                                 // click the blue circle 
     oAudio.play();                                      // stop any music
     background(img02);}                                 // playing other one
  
  else if(mouseX>682&&mouseX<710,mouseY>576&&mouseY<606) 
      {
      tAudio.play();                                    // click the down-right circle   
     background(img03);}                                // stop any music before 
                                                       // playing other one
  else {
       pAudio.pause();      
       oAudio.pause();
       tAudio.pause();
       background(imgOnOff);
  }
}


