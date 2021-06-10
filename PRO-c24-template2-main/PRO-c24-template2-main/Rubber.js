class Rubber {
    constructor(x,y,r){
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1
        }
    this.r = r
      this.body = Bodies.circle(x,y,r/2,options);
      World.add(world, this.body);

    }

    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("blue");
        fill("white");
        ellipse(0, 0, this.r,this.r );
        pop();
    }

}
