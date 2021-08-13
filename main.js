
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, context, x, y, dx, dy;
var entities = [];
var tickCount = 0;
var lives = 50;
function init(){
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    context = canvas.getContext("2d");

    x = y = 100;    // initial x,y canvas location
    dx = dy = 2;    // velocity in x and y directions

    animate();      // kick off the animation
	

	this.entities.push(new BasicTrash(this));
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0,0,canvas.width,canvas.height);
	//drawing the life counter
	context.font = '60px san-serif';
	context.fillStyle = 'red';
	context.fillText(this.lives, this.canvas.width-100,60);
	
	
	
    update();   // update location
	draw();
    requestAnimationFrame(animate); // next cycle
}

// move the circle to a new location
function update() {
	if(Math.random() > 0.9) {this.entities.push(new BasicTrash(this)); }
	
	for(let id = 0; id < this.entities.length; id++) {
		if(this.entities[id].markForRemoval == false) {
			this.entities[id].run();
		}
	}
	
	
}

// render a circle
function draw() {
	
}
