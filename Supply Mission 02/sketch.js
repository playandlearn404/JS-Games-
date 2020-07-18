var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	boxSprite01 = createSprite(400, 600, 20, 100);
	boxBody01 = Bodies.rectangle(200, 610, 20, 20, {isStatic:true});
	World.add(world, boxBody01);
	boxSprite01.shapeColor = "red";

	boxSprite02 = createSprite(400, 600, 20, 100);
	boxBody02 = Bodies.rectangle(600, 610, 20, 20, {isStatic:true});
	World.add(world, boxBody02);
	boxSprite02.shapeColor = "red";

	boxSprite03 = createSprite(400, 600, 385, 20);
	boxBody03 = Bodies.rectangle(400, 650, 400, 20, {isStatic:true});
	World.add(world, boxBody03);
	boxSprite03.shapeColor = "red";

	invisible = Bodies.rectangle(width/2, 630, width, 10 , {isStatic:true} );
 	World.add(world, invisible);

	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  boxSprite01.x = boxBody01.position.x
  boxSprite01.y = boxBody01.position.y
  boxSprite02.x = boxBody02.position.x
  boxSprite02.y = boxBody02.position.y
  boxSprite03.x = boxBody03.position.x
  boxSprite03.y = boxBody03.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
  }
}



