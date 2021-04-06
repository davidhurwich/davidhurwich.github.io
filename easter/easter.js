let inp;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('pink');
  inp = createInput('');
  inp.position(10, 10);
  inp.size(100);
   button = createButton('click me');
  button.position(120, 10);
  button.mousePressed();
}

function mousePressed(){
  let answer = inp.value();
  if (answer === "grizzy"){
      window.open("https://www.lycos.com");

  }
}