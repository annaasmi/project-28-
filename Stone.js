class Stone{
    constructor(x,y){
      var options={
          isStatic: false,
          restitution:0,
          friction:1,
          desity:1.2
      }
        this.x =x;
        this.y =y;
        this.body = Bodies.rectangle(x,y,40,40,options);
        this.image = loadImage("images/stone.png");
        World.add(world,this.image);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,50,50);
        pop();
    }
}