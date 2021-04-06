let inp, img;

function preload() {
    img = loadImage('pattypanda.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('pink');
    inp = createInput('');
    inp.position(10, 10);
    inp.size(100);
    image(img, 10, 30);
    button = createButton('submit');
    button.position(120, 10);
    button.mousePressed();
}

function mousePressed() {
    let answer = inp.value();
    if (answer === "grizzy") {
        window.open("https://davidhurwich.github.io/easter/griz.html");

    }
}
