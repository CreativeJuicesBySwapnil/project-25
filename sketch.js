
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper;
var world;
function preload(){
	dustbinImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1000, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,500,width,20);
	dustbinObj=new Dustbin(800,475,200,30);
	dustbinOBJ=new Dustbin(700,440,30,100);
	dustbinOBj=new Dustbin(900,440,30,100);
	paper=new Paper(200,200,50);


	Engine.run(engine);
  
}


function draw() {
	background(230);
	
	groundObject.display();
	dustbinObj.display();
	dustbinOBJ.display();
	dustbinOBj.display()
	imageMode(CENTER);
	image(dustbinImage,800,400,250,200)
	paper.display()
  
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:350,y:-350})
	}
}