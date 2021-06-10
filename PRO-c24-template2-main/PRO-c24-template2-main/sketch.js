const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var rubber;
var hammer;
var stone;
var sand1,sand2,sand3,sand5;

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	plane = new Plane(600,height,1200,20);
	rubber = new Rubber(900,450,70);
	hammer = new Hammer(10,100);
	stone = new Stone(700,320,100,100);
	iron = new Iron(300,350);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("violet");

  plane.display();
  rubber.display();
  hammer.display();
  stone.display();
  iron.display();


 
}
