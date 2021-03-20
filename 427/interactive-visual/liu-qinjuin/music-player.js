var pAudio, oAudio, tAudio, fAudio;
let imgOnOff;
let img01, img02, img03;
let gif01;

function preload() {
    pAudio = loadSound('https://neoliu28.github.io/mp3/whatswrong.mp3');
    oAudio = loadSound('https://neoliu28.github.io/mp3/RNBALLN.mp3');
    tAudio = loadSound('https://neoliu28.github.io/mp3/LUFE.mp3');
    fAudio = loadSound('https://neoliu28.github.io/mp3/Dungeon%20&%20Fighter%20OST%20%20Wind%20Inside%20YouCover%20by%20Raon%20Lee.mp3');
    imgOnOff = loadImage('https://neoliu28.github.io/MVP/imgStartStop.jpg');
    img01 = loadImage('https://neoliu28.github.io/MVP/imgSong1.jpg');
    img02 = loadImage('https://neoliu28.github.io/MVP/imgSongTwo.jpg');
    img03 = loadImage('https://neoliu28.github.io/MVP/imgSongThree.jpg');

    gif01 = loadImage('https://neoliu28.github.io/mp3/circleGif01.gif');
    gif01 = createImg('https://neoliu28.github.io/mp3/circleGif01.gif', 'the p5 magenta asterisk');


}

function setup() {
    createCanvas(800, 800);
    background(imgOnOff);
    pAudio.setVolume(0.5); //songs' volume
    oAudio.setVolume(0.5);
    tAudio.setVolume(0.5);
    fAudio.setVolume(0.5);
    gif01 = gif01.position(300, 300, 200, 200); //animation


}

//pause function
function keyPressed() //press any key on the keyboard
{ // to stop
    pAudio.pause();
    oAudio.pause();
    tAudio.pause();
    fAudio.pause();
    background(imgOnOff);
}

//music player
function mouseClicked() {
    if (mouseX > 70 && mouseX < 115, mouseY > 230 && mouseY < 280) {
        pAudio.play();
        oAudio.pause();
        tAudio.pause();
        fAudio.pause(); // click the up-left circle 
        background(img01);
    } else if (mouseX > 470 && mouseX < 550, mouseY > 456 && mouseY < 550) { // click the blue circle 
        fAudio.play();
        pAudio.pause();
        oAudio.pause();
        tAudio.pause();
        background(img02);
    } else if (mouseX > 682 && mouseX < 710, mouseY > 576 && mouseY < 606) // click the down-right circle 
    {
        tAudio.play();
        pAudio.pause();
        oAudio.pause();
        fAudio.pause();
        background(img03);
    } else {
        pAudio.pause(); // stop any music   
        oAudio.pause();
        tAudio.pause();
        fAudio.pause();
        background(imgOnOff);
    }
}
