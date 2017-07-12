var x,y;
var angle;
var silder;
function setup() {
	createCanvas(1000,600);
	// angle = PI/4;
	angle = PI/6;
	x = width/2;
	y = height - 100;
	slider = createSlider(0,PI,PI/4,0.001);

	 background(255);
     translate(x,y);
 	 stroke(100);
 	 // angle += 0.002;
	 branch(100,4);


}

function draw() {

	 angle = slider.value();

}

function mouseReleased(){
    angle = 0;
}

function branch(len,weight){
	strokeWeight(weight);
	line(0,0,0,-len);
	translate(0,-len);
	if(len>1){
		push();
		rotate(angle+random(-angle/3,angle/3));
		branch(len*0.618,weight*0.8);
		pop();
		push();
		rotate(-angle+random(-angle/3,angle/3));
		branch(len*0.618,weight*0.8);
		pop();
	}  
}