
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

	//Create the Bodies Here.
  tree = new Tree(1000, 500, 400, 400);
	mango = new Mango(1020, 410);
	mango2 = new Mango(1150, 440);
	mango3 = new Mango(900, 460);
	mango4 = new Mango(1040, 340);
	mango5 = new Mango(950, 370);
	boy = new Boy(200, 640, 150, 200);
	stone = new Stone(600, 1, 50, 50);
	chain = new Chain(stone.body,{x:155, y:600});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(210);
  tree.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  boy.display();
  chain.display();
  detectCollision(stone, mango);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  drawSprites();
}

function mouseReleased() {
  chain.fly();
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x:mouseX, y: mouseY});
}

function detectCollision(lstone, lmango) {
    mangoBodyPosition = lmango.body.position;
    stoneBodyPosition = lstone.body.position;
    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
    console.log(distance);
    if (distance < 60) {
      Matter.Body.setStatic(lmango.body, false);
    }
}
