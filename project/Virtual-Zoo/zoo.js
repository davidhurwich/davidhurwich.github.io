//variables Setup

// areas
let videoPlayer, container, controls, mainMenuDropDown;

// Menus 
let animalSelectMenu, introAnimation, animalSelectBirds, animalSelectMammals, animalSelectPets, animalSelectOcean, animalSelectReptiles, animalFavorites, currentAnimal, sectionMoreInfo, defaultStream; 

// buttons
let buttonCloseMainUI, buttonOpenMainUI, buttonOpenMoreInfo, buttonCloseMoreInfo, addFavorite, buttonMainMenu;

// counters
let userFavOptions, userFavOptionsURL;

// ====  Live Animal Stream Arrays =====

var animalStreamFavoriteName = [];
var animalStreamLogFavorites  = [];

var animalStreamLogOcean = [
    //Deerfield Beach Florida
    "https://www.youtube.com/embed/OBNF7N1ZDlM?autoplay=1&mute=1",


    // Monteray Bay Aquarium Jellyfish Cam
    "https://www.youtube.com/embed/azpH0v2MdKw?autoplay=1&mute=1",

    //Momterey Aquarium Otter Cam
    "https://www.youtube.com/embed/JQnxefImhu8?autoplay=1&mute=1",

    // Penguin
    "https://www.youtube.com/embed/hWbt2eVCEe8?autoplay=1&mute=1",

    // Shark Lagoon 
    "https://www.youtube.com/embed/LvfaMv9nbJc?autoplay=1&mute=1",

    // Marine Mammal Cam
    "https://player.twitch.tv?channel=marinemammalrescue&parent=127.0.0.1&referrer=http%3A%2F%2F127.0.0.1%3A5500%2Fzoo.html"
];


var animalStreamLogBirds = [
    // Barn Owl Cam: Charter Group of Wildlife Ecology
    "https://www.youtube.com/embed/N1QWE0eQDVI?autoplay=1&mute=1",


    // Bird Cam
    "https://www.youtube.com/embed/N609loYkFJo?autoplay=1&mute=1",

    // Pretoria, South Africa Bird Cam
    "https://www.youtube.com/embed/mMHLc6I_46U?autoplay=1&mute=1",



    // NEFL Bald Eagle Cam
    "https://www.youtube.com/embed/SrKkGqkQG6M?autoplay=1&mute=1",

    // condor cam - Oakland Zoo
    "https://relay.ozolio.com/pub.api?cmd=embed&oid=EMB_NCDF000008EF",


];


var animalStreamLogReptiles = [
    // St Augustine Alligator Farm
    "https://www.youtube.com/embed/EnxRJii_dp8?autoplay=1&mute=1",
    // iguna
    "https://www.youtube.com/embed/gkoNwGywutw?autoplay=1&mute=1",
];

var animalStreamLogPets = [
    // Explore Puppy Cam
    "https://www.youtube.com/embed/G0IBqtO1K28?autoplay=1&mute=1",

    // Rabbits
    "https://player.twitch.tv?channel=qbunnytv&parent=127.0.0.1&referrer=http%3A%2F%2F127.0.0.1%3A5500%2Fpractice.html",
    
    // Sheep
    "https://player.twitch.tv?channel=ourlifewithewe&parent=127.0.0.1&referrer=http%3A%2F%2F127.0.0.1%3A5500%2Fpractice.html"
];
var animalStreamLogMammals = [
    // Grizzly Bear - Oakland Zoo

    "https://relay.ozolio.com/pub.api?cmd=iframe&oid=CID_JSVB00000BA1&app_mode=view&allow_home=false",
    // Panda Cam
    "https://www.youtube.com/embed/65JHo3Cy2tY?autoplay=1&mute=1",

    //Kansas City Polar Bear
    "https://www.youtube.com/embed/BSUnBPvX9K4?autoplay=1&mute=1",

    // Racoons
    "https://player.twitch.tv?channel=wildlifecam&parent=127.0.0.1&referrer=http%3A%2F%2F127.0.0.1%3A5500%2Fpractice.html",
    // Tiger Cat Big Cat Rescue
    "https://www.youtube.com/embed/NVCi9yYwRCY?autoplay=1&mute=1"
];


function preload() {

    // select major areas/
  
    videoPlayer = select("#videoPlayer");
    container = select("#container");
    controls = select("#controls");
    mainMenuDropDown = select("#main-drop-down");
    mainMenuDropDown.hide();

    // loads default animal stream from localStorage
    let defaultS = localStorage.getItem("defaultStream");
    if(defaultS === null){
        videoPlayer.attribute("src", animalStreamLogOcean[0]);
    } else {
        videoPlayer.attribute("src", defaultS);
    }

    animalSelectType = select("#animalType");
    animalSelectBirds = select("#animalSelectBirds");
    animalSelectOcean = select("#animalSelectOcean");
    animalSelectMammals = select("#animalSelectMammals");
    animalSelectPets = select("#animalSelectPets");
    animalSelectReptiles = select("#animalSelectReptiles");
    animalFavorites = select("#animalFavorites");

    // loads user saved preferences from localStorage
    let userFav = localStorage.getItem("userFavoritesAnimalName");
    let userFavStoredURL = localStorage.getItem("userFavoritesUrl");
    if(userFav === null){
        animalStreamFavoriteName = [];
    } else {
        userFavOptions = userFav.split(",");
        userFavOptionsURL = userFavStoredURL.split(",");
        addFavHTML();
    }


    introAnimation = select("#introAnimation");
    sectionMoreInfo = document.querySelector("#info");


   

    // button setups
    buttonCloseMainUI = select(".buttonCloseMainUI");
    buttonOpenMainUI = select(".buttonOpenMainUI");
    addFavorite = select(".addFavorite");
    defaultStream = select(".defaultStream");
    buttonMainMenu = select("#logo");
    buttonOpenMainUI.hide();

    // dropdown setups
    animalSelectBirds.hide();
    animalSelectOcean.hide();
    animalSelectMammals.hide();
    animalSelectPets.hide();
    animalSelectReptiles.hide();
    animalFavorites.hide();
    
   
    // container.hide();
    // document.getElementById("body").onload = setTimeout(loadZoo, 3000)


}


function setup() {
    noCanvas();

    // add event functions
    animalSelectType.changed(animalType);
    animalSelectOcean.changed(changeAnimalOcean);
    animalSelectMammals.changed(changeAnimalMammals);
    animalSelectBirds.changed(changeAnimalBirds);
    animalSelectPets.changed(changeAnimalPets);
    animalSelectReptiles.changed(changeAnimalReptiles);
    animalFavorites.changed(changeAnimalFavorites);
    buttonCloseMainUI.mouseClicked(closeMainUI);
    buttonOpenMainUI.mouseClicked(openMainUI);
    addFavorite.mouseClicked(addFavoriteFN);
    defaultStream.mouseClicked(setDefaultStream);
    buttonMainMenu.mouseClicked(toggleMainMenu);
}

function toggleMainMenu(){
   
    let a = mainMenuDropDown.attribute("style");
    if ( a === "display: none;"){
        
    }
       
    
}

function animalType() {
    var select = [
        animalSelectMammals, animalSelectOcean, animalSelectBirds, animalSelectPets, animalSelectReptiles, animalFavorites
    ];
    let typeIndexNumber = document.getElementById("animalType").selectedIndex;
    let selectMenus = selectAll(".category");
    print(selectMenus);
    for (i = 0; i < selectMenus.length; i++) {
        selectMenus[i].attribute("style", "display:none");
    }
    select[typeIndexNumber].show();
}

// === Customization Favorites list / Set Default Stream ===

function setDefaultStream(){
    let defaultStream = videoPlayer.attribute("src");  
    localStorage.setItem("defaultStream", defaultStream);
    
}

function addFavoriteFN(){
    let savedName = currentAnimal;
    let savedUrl = videoPlayer.attribute("src");
    let animalOption = createElement("option", currentAnimal);
    animalFavorites.child(animalOption);
    animalStreamFavoriteName.push(savedName);
    animalStreamLogFavorites.push(savedUrl);
    localStorage.setItem("userFavoritesAnimalName", animalStreamFavoriteName);
    localStorage.setItem("userFavoritesUrl", animalStreamLogFavorites);
   
}


// ==== changing animal stream functions ===

function changeAnimalOcean() {

    let videoIndexNumber = document.getElementById("animalSelectOcean").selectedIndex;
    currentAnimal = animalSelectOcean.value();
    videoPlayer.attribute("src", animalStreamLogOcean[videoIndexNumber]);

}

function changeAnimalMammals() {

    let videoIndexNumber = document.getElementById("animalSelectMammals").selectedIndex;
    currentAnimal = animalSelectMammals.value();
    videoPlayer.attribute("src", animalStreamLogMammals[videoIndexNumber]);
}

function changeAnimalPets() {

    let videoIndexNumber = document.getElementById("animalSelectPets").selectedIndex;
    currentAnimal = animalSelectPets.value();
    videoPlayer.attribute("src", animalStreamLogPets[videoIndexNumber]);
}

function changeAnimalBirds() {

    let videoIndexNumber = document.getElementById("animalSelectBirds").selectedIndex;
    currentAnimal = animalSelectBirds.value();
    videoPlayer.attribute("src", animalStreamLogBirds[videoIndexNumber]);
}

function changeAnimalReptiles() {

    let videoIndexNumber = document.getElementById("animalSelectReptiles").selectedIndex;
    currentAnimal = animalSelectReptiles.value();
    videoPlayer.attribute("src", animalStreamLogReptiles[videoIndexNumber]);
}

function changeAnimalFavorites() {

    let videoIndexNumber = document.getElementById("animalFavorites").selectedIndex;
    currentAnimal = animalFavorites.value();
    videoPlayer.attribute("src", animalStreamLogFavorites[videoIndexNumber]);
}

// ==== END of animal stream functions ===


function loadZoo() {
    introAnimation.hide();
    container.show();

}


//  === UI / Menu Functions ===
function openMoreInfo(){
    print("more info run");
}




function closeMainUI() {
    controls.hide();
    buttonOpenMainUI.show();
}

function openMainUI() {
    buttonOpenMainUI.hide();
    controls.attribute("style", "display:grid;");
}

function addFavHTML() {
    for(let i = 0; i < userFavOptions.length; i++){
       
        let animalOption = createElement("option", userFavOptions[i]);
        animalFavorites.child(animalOption);
       
        animalStreamFavoriteName.push(userFavOptions[i]);
        animalStreamLogFavorites.push(userFavOptionsURL[i]);


    }
}

