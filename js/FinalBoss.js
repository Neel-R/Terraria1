class FinalBoss {
    constructor(x,y/*image*/) {
        var options = {
            'restitution':1.0,
            'friction':1.0,
            'density':1.0
          }
            this.body = Bodies.rectangle(x, y, 15, 40, options);
            this.width = 15;
            this.height = 40;
            //this.image = loadImage("sprites/base.png");
            World.add(world, this.body);
          }
          display(){
            push();
            translate(this.body.position.x, this.body.position.y);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
          }
}