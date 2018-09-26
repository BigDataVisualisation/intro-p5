var arr = [110,210,130,117,13,140,127,150,1200,1230,1250,1280,1180,1140,1150];
var maxVal;

function setup() {
	createCanvas(windowWidth, windowHeight);
	maxVal = max(arr);
}

function draw() {

	background(255);
	/*for (var i = 0; i < arr.length; i++) {
		var x = i*50;
		var y = 50;
		var val = arr[i];
		fill(0);
		stroke(0);
		rect(x,y,30,val);
	}*/

	push();
	translate(100,100);
	beginShape();
	for (var i = 0; i < arr.length; i++) {
		var x = i*50;
		var y = map(arr[i],0,maxVal,200,0);
		vertex(x,y);
	}
	endShape();
	pop();
}