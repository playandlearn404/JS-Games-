const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(300, 600, 25);
	bob2 = new Bob(350, 600, 25);
	bob3 = new Bob(400, 600, 25);
	bob4 = new Bob(450, 600, 25);
	bob5 = new Bob(500, 600, 25);
	roof = new Roof(400, 300, 400, 30);
	rope1 = new Chain(bob1.body, roof.body, -100, 0);
	rope2 = new Chain(bob2.body, roof.body, -50, 0);
	rope3 = new Chain(bob3.body, roof.body, 0, 0);
	rope4 = new Chain(bob4.body, roof.body, 50, 0);
	rope5 = new Chain(bob5.body, roof.body, 100, 0);
	Engine.run(engine);
}


function draw() {
  background("black");
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
}

function keyPressed() {
	if(keyCode 	=== UP_ARROW) {
       Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-60, y:-50});
	}
}
