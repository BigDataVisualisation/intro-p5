function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(255);

	// var left = 100;
	// var top = 100;
	// var gap = 50;
	// for(var i=0; i<10; i++){
	// 	for(var j=0; j<10; j++){
	// 		var x = left + i*gap;
	// 		var y = top + j*gap;
	// 		fill(0);
	// 		stroke(0);
	// 		ellipse(x,y,30,30);
	// 	}
	// }

	var n = 10;
	var border = 100;
	for(var i=0; i<n; i++){
		for(var j=0; j<n; j++){
			var x = map(i,0,n,border,width-border)
			var y = map(j,0,n,border,height-border);
			var d = dist(x,y,mouseX,mouseY);
			var col = map(d,0,width/3,0,255);
			fill(col);
			stroke(col);
			ellipse(x,y,30,30);
		}
	}

}