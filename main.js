
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, context, x, y, dx, dy;
var entities = [];
var tickCount = 0;
var lives = 50;
var mouseX =1;
var mouseY;
function init(){
	
	if (window.Event) {
		document.captureEvents(Event.MOUSEMOVE);
	}
	document.onmousemove = getCursorXY;
	
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    context = canvas.getContext("2d");
	
    x = y = 100;    // initial x,y canvas location
    dx = dy = 2;    // velocity in x and y directions

	this.player = (new TrashCan(this));

    animate();      // kick off the animation
	
	
}
function getCursorXY(e) {
	mouseX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
	mouseY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}
// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0,0,canvas.width,canvas.height);
	//drawing the life counter
	context.font = '60px san-serif';
	context.fillStyle = 'red';
	context.fillText(this.lives, this.canvas.width-100,60);
	
	
	if(this.lives > 1) {
		update();   // update location
	}
	else {
		death();
	}
    requestAnimationFrame(animate); // next cycle
}

function death() {
	context.font = '60px san-serif';
	context.fillStyle = 'red';
	
	context.fillRect(0,0,canvas.width,canvas.height);
	context.fillStyle = 'white';
	context.fillText("eart is gone", this.canvas.width/2-120,this.canvas.height/2);
	context.fillText("Sad!", this.canvas.width/2-50,this.canvas.height/2+75);
	
}

// move the circle to a new location
function update() {
	

	
	if(Math.random() > 0.96) {this.entities.push(new BasicTrash(this)); }
	if(Math.random() > 0.96) {this.entities.push(new PVCTrash(this)); }
	
	this.player.run();
	
	for(let id = 0; id < this.entities.length; id++) {
		if(this.entities[id].markForRemoval == false) {
			this.entities[id].run();
		}
	}
	
	
	
}

function updateMouseLocation() {
	
	
	
}

// render a circle
function draw() {
	
}
