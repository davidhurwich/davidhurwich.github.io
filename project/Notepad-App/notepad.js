let input, list, menuIcon, nav, editArea, editButton, editInput, nameList, nameListButton, currentListName, listName, downloadButton, saveListButton;

let editNameVisible = false;

let listArray = [];

function setup(){
    noCanvas();
    input = select("#add");
    nav = select("#nav");
    menuIcon = select("#menuIcon");
    list = select("#list");
    editButton = select("#edit");
    downloadButton = select("#saveList");
    editArea = select("#edit-area");
    nameList = select("#userListName");
    nameListButton = select("#updateListName");
    listName = select("#listname");
    currentListName = select("#currentListName");

    menuIcon.mouseClicked(toggleMenu);
    editButton.mouseClicked(toggleEditName);
    input.changed(updateList);
    nameListButton.changed(toggleEditName);
    downloadButton.mousePressed(download);

}

function draw(){
    if(currentListName.html() === ""){
        currentListName.html( "Click to name your list");
    }
    
}

function updateList(){
    listArray.push(input.value());
    let a = createElement("li",input.value());
    let b = createElement("i", "");
    b.addClass("fa-solid");
    b.addClass("fa-circle-minus");
    b.parent(a);
    a.parent("list");
    input.value("");
    checkList();
}

// function checkList(){
//     for ( let i = 0; i < listArray.length; i++){
//         let a = listArray[i];
//         let b = createElement("li", a);
//         b.parent(list);

//     }
// }

function toggleMenu(){
   
    nav.toggleClass("show");
 
}

function toggleEditName(){
    
    if (editNameVisible === false){
       
        editArea.addClass("hide");
        editArea.removeClass("show");
        nameList.removeClass("hide");
        nameList.addClass("show");
        editNameVisible = true;
        print("off");
    } else {
        editArea.removeClass("hide");
        editArea.addClass("show");
        nameList.removeClass("show");
        nameList.addClass("hide");
        editNameVisible = false;
        print("on");
        currentListName.html(nameListButton.value());
    } 
    
    
}

function updateListName(){

    
}

function download(){
    let arrayList = selectAll("li");
    
    
    let items;
    
    
    for(let i=0; i < arrayList.length; i++){
       items += arrayList[i].html() + "/";
     }
    
    items = split(items, "/");
    
    let downloadFileName = currentListName.html() + ".txt"; 
    saveStrings(items, downloadFileName );
     
}