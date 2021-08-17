class TrashCan {
    constructor(game){
		//Hello to all the people doing enemies
		//This is just a template that demonstrates how to work with the new level system.
		//The level system is a tree, so each path node has children with other path Nodes.
		//In order to accomodate this, change this following code


        this.game = game; 
        this.loc = new JSVector(100,this.game.canvas.height-30);
        this.vel = new JSVector(0,0);   // velocity
        this.acc = new JSVector(0,0);   //steering acceleration
        this.pulser = new JSVector(0,0);
        this.maxSpeed = 6;
        this.clr='blue';
        this.width = 100
		this.height = 30
		
		
		this.markForRemoval = false;
    }

    run() {
		this.trashRemoval();
        this.update();
        this.render();
		
    }

	trashRemoval() {
		let trash = this.game.entities;
		for(let i = 0; i < trash.length; i++) {
			if((trash[i].loc.x > this.loc.x) && (trash[i].loc.x < this.loc.x +this.width)) {
				if((trash[i].loc.y > (this.game.canvas.height-40))) {
					this.game.entities[i].markForRemoval = true;
					
				}
				
			}
			
		}
		
	}
	
	
    update(){
		this.updateMouseLocation();
		this.vel.add(this.acc);
		this.loc.add(this.vel);
	}
	
	updateMouseLocation() {
		console.log(this.game.mouseX);
		this.loc.x = this.game.mouseX - this.width/2;
		
	}

    render(){
        let ctx = this.game.context;
        ctx.strokeStyle = this.clr;
        ctx.fillStyle = this.clr;
        ctx.beginPath();
        ctx.fillRect(this.loc.x, this.loc.y, this.width,this.height);
        ctx.fill();
        ctx.stroke();
    }

    


	//Congratulations, your tower will now work with the new level system.
	//If you have any problems, feel free to contact me on slack and I'll get back to you.

    

}
