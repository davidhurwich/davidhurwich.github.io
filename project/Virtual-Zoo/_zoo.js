var animalSelect;
var intro;
var controls;
var container;
var videoPlayer;
var dialog;

var addVideoStreamInput;
var addVideoStreamInputName;
var addVideoStreamButton;
var addVideoStreamButton2;
var closeButton;

// live feeds from Internet
var videoLog = [

// Monteray Bay Aquarium Jellyfish Cam
"https://www.youtube.com/embed/azpH0v2MdKw?autoplay=1&mute=1", 

//Kansas City Zoo Pengin Cam
"https://www.youtube.com/embed/BSUnBPvX9K4?autoplay=1&mute=1", 

"https://www.youtube.com/embed/hWbt2eVCEe8?autoplay=1&mute=1", 

"https://www.youtube.com/embed/JQnxefImhu8?autoplay=1&mute=1",

"https://www.youtube.com/embed/N609loYkFJo?autoplay=1&mute=1", 

"https://www.youtube.com/embed/65JHo3Cy2tY?autoplay=1&mute=1"];


function setup() {
    noCanvas();
    videoPlayer = document.getElementById("videoplayer");
    intro = document.getElementById("start");
    container = select("#container");
    controls = select("#controls");
    dialog = select("#modal");
    // set buttons, inputs
    addVideoStreamButton = createButton("Add Video Stream");
    addVideoStreamButton.addClass("open-video-stream-modal");
    addVideoStreamButton.parent(controls);
    addVideoStreamButton.mousePressed(openmodal);

    addVideoStreamInputName = createInput();
    addVideoStreamInputName.addClass("video-input-stream-name");
    addVideoStreamInputName.parent(dialog);

    addVideoStreamInput = createInput();
    addVideoStreamInput.addClass("video-input-stream");
    addVideoStreamInput.parent(dialog);



    addVideoStreamButton2 = createButton("Add Video Stream");
    addVideoStreamButton2.addClass("add-video-stream");
    addVideoStreamButton2.parent(dialog);
    addVideoStreamButton2.mousePressed(addVideoStreamFn);

    
    closeButton = createButton("X");
    closeButton.addClass("close-button");
    closeButton.parent(dialog);
    closeButton.mousePressed(closemodal);

    



    animalSelect = createSelect();
    animalList();
}

function animalList() {
    animalSelect.option("Jellyfish");
    animalSelect.option("Penguins");
    animalSelect.option("Polar Bears");
    animalSelect.option("Otters");
    animalSelect.option("Birds");
    animalSelect.option("Pandas");
    animalSelect.id("animalSelect");
    animalSelect.changed(changeAnimal);
}

function changeAnimal() {
    let videoIndexNumber =
        document.getElementById("animalSelect").selectedIndex;
    print(videoLog[videoIndexNumber]);
    videoPlayer.setAttribute("src", videoLog[videoIndexNumber]);
}

function loadZoo() {
    print("ZooAnimationPageDone");
    intro.setAttribute("style", "display:none;");
    container.setAttribute("style", "display:block;");
}

function addVideoStreamFn() {
    let addStream = addVideoStreamInput.value() + "?autoplay=1&mute=1";
    videoLog.push(addStream);
    animalSelect.option(addVideoStreamInputName.value());
}

function openmodal(){
    var openModal = document.querySelector("#test");
    
    openModal.showModal();
}

function openmodal(){
    var openModal = document.querySelector("#modal");
    openModal.showModal();
}

function closemodal(){
    var closeModal = document.querySelector("#modal");
    closeModal.close();
}
