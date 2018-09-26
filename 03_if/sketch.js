var circle = {
	x: 0,
	y: 0,
	speed: 10
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);

	circle.y = height/2;
}

function draw() {

	background(255);
/*
	if(mouseX<width/2){
		fill('red');
	}
	else {
		fill('blue');
	}

	noStroke();
	rect(width/2,height/2,200,200);*/

	if(circle.x > width || circle.x < 0){
		circle.speed = -circle.speed;
	}
	
	circle.x = circle.x + circle.speed;

	fill('red');
	noStroke();
	ellipse(circle.x,circle.y,50,50);


}