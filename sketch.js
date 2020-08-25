
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,ground,stone,boy,boyImg,mango1,mango2,mango3,mongo4,sling;

function preload()
{
	boyImg = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1200, 700);

	 boy = createSprite(150,620,50,10);
	 boy.addImage("boy",boyImg);
	 boy.scale = 0.1;
	 boy.depth = -1;

	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1100,450,200,500);
	ground = new Ground(600,690,1200,20);
	stone = new Stone(100,570);
	mango1 = new Mango(1090,450);
	mango2 = new Mango(1080,330);
	mango3 = new Mango(1130,230);
	mango4 = new Mango(1140,380);
	sling = new Sling(stone.body,{x:100,y:570});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
   tree.display();
   ground.display();
   stone.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   sling.display();

   detectollision(stone,mango1);
   detectollision(stone,mango2);
   detectollision(stone,mango3);
   detectollision(stone,mango4);

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

function detectollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		matter.body.setStatic(lmango.body,false);
	}

}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:100,y:570})
	    sling.attach(stone.body);
	}
}


