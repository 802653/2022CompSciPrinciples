
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, context, x, y, dx, dy;
var entities = [];
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
    update();   // update location
    requestAnimationFrame(animate); // next cycle
}

// move the circle to a new location
function update() {
	for(let id = 0; id < this.entities.length; id++) {
		this.entities[id].run();	
	}
}

// render a circle
function draw() {
}
