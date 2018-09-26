function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {

	background(255);

	/*fill(0);
	stroke(0);
	ellipse(100,200,30,30);
	ellipse(150,200,30,30);
	ellipse(200,200,30,30);
	ellipse(250,200,30,30);
	ellipse(300,200,30,30);*/

	for(var i=0; i<5; i++){
		var x = i*60;
		fill(0);
		stroke(0);
		ellipse(x,200,30,30);
	}
}