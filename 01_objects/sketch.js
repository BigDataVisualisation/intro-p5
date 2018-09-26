var circle = {
    x: 0,
    y: 0,
    diameter: 100
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);

    circle.x = circle.x + 1;
    circle.y = circle.y + 1;
    fill('red');
    noStroke();
    ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
}