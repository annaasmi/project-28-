class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x =x;
        this.y =y;
        this.body = Bodies.circle(x,y,10,options);
        this.image = loadImage("images/mango.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("yellow");
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}