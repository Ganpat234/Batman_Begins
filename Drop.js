class Drop{
    constructor(x,y){
        this.trajectory = []
    }
    display() {

        if(this.body.position.y > height){
            Matter.body.setPosition(this.body, {x: random(0,400), y:random(0,400)})
            this.trajectory.push(position)
        }

        for(var i =0;i<this.trajectory.length;i++){
            
        }
    }
}

