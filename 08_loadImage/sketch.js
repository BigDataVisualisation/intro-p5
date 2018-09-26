var img;
function preload(){
	img = loadImage('img/astronaut.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {
	background(255);

	imageMode(CENTER);
	push();
	translate(width/2,height/2);
	rotate(map(mouseX,0,width,0,HALF_PI));
	image(img,0,0);
	pop();
}