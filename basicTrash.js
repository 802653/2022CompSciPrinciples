class BasicTrash {
    constructor(game){
		//Hello to all the people doing enemies
		//This is just a template that demonstrates how to work with the new level system.
		//The level system is a tree, so each path node has children with other path Nodes.
		//In order to accomodate this, change this following code


        this.game = game; 
        this.loc = new JSVector(Math.random(),-50);

        this.vel = new JSVector(0,4);   // velocity
        this.acc = new JSVector(0,0);   //steering acceleration
        this.pulser = new JSVector(0,0);
        this.maxSpeed = 6;
        this.clr="rgba(171, 183, 183, 0.7)";
        this.rad=13;
    }

    run() {
        this.update();
        this.render();
    }

    update(){
		this.vel.add(this.acc);
		this.loc.add(this.vel);
	}

    render(){
        let ctx = this.game.context;
        ctx.strokeStyle = this.clr;
        ctx.fillStyle = this.clr;
        ctx.beginPath();
        ctx.arc(this.loc.x, this.loc.y, this.rad, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
    }

    


	//Congratulations, your tower will now work with the new level system.
	//If you have any problems, feel free to contact me on slack and I'll get back to you.

    

}
