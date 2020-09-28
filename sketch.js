
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	box1 = new Box(1050,700,100,20);
	box2 = new Box(1000,675,20,75);
	box3 = new Box(1100,675,20,75);

	ball1 = new Ball(100, 450, 25);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  box1.display();
  box2.display();
  box3.display();
  ball1.display();
  drawSprites();
 
}



