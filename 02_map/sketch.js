function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);

	/*var r = mouseX;
	var g = mouseY;
	var b = 0;
	console.log(r,g,b);*/

	var r = map(mouseX,0,width,0,255);
	var g = map(mouseY,0,height,0,255);
	var b = 0;

	fill(r,g,b);
	noStroke();
	ellipse(width/2,height/2,200,200);
}