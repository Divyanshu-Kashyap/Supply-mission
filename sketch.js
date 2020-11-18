const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopter, package,packageIMG;
var packageBody,ground;

var side1,side2,side3;

function preload(){

	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	package=createSprite(width/2, 80, 10,100);
	package.addImage(packageIMG);
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

    side1=createSprite(310,600,20,100);
	side1.shapeColor="red";
	
	side2=createSprite(400,650,200,20);
	side2.shapeColor="red";
	
    side3=createSprite(490,600,20,100);
    side3.shapeColor="red",
   

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor="white";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:false});
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
 
	side1 = Bodies.rectangle(200, 600,20, 100 , {isStatic:true} );
 	World.add(world, side1);

	side2 = Bodies.rectangle(400,650,200,55 , {isStatic:true} );
 	World.add(world, side2);

	side3 = Bodies.rectangle(600, 600,20,100, {isStatic:true} );
 	World.add(world, side3);




}

function draw() {
  rectMode(CENTER);
  background(0);

  package.x= packageBody.position.x 
  package.y= packageBody.position.y 

  if (keyDown("down")&&package.y<=200){
     Engine.run(engine);
  }

  if(package.x<200){
	package.x=packageBody.x;
  }

  drawSprites();
 
}


 




