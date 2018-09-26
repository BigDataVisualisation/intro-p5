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

	for (var i = 0; i < arr.length; i++) {
		var x = i*50;
		var y = 50;
		var val = map(arr[i],0,maxVal,0,200);
		fill(0);
		stroke(0);
		rect(x,y,30,val);
	}
}