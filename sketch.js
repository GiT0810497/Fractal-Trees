var x,y;
var angle;
var rAngle
var silder;
var canvas;
var h1;
var button;
var isRandom = false

function setup() {
  h1 = createElement("h1","Fractal Tree");
	canvas = createCanvas(1000,600);
	slider = createSlider(0,PI,PI/4,0.001);
	button = createButton("Random");
	button.mousePressed(randomAngle);

	x = width/2;
	y = height - 100;
  
  // slider.position(0,0);
  // canvas.position(0,100);

}

function draw() {
  if (isRandom) {
      angle = rAngle;
  }else{
    	angle = slider.value();
  }
  	background(250);
	translate(x,y);
	stroke(100);
	branch(100,4);
}

function randomAngle(){
  isRandom = !isRandom;
  rAngle = random(PI/8,PI/4);
}

function branch(len,weight){
	strokeWeight(weight);
	line(0,0,0,-len);
	translate(0,-len);
	if(len>1){
		push();
		rotate(angle);
		branch(len*0.618,weight*0.8);
		pop();
		push();
		rotate(-angle);
		branch(len*0.618,weight*0.8);
		pop();
	}
}
