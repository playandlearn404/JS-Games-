const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function setup() {
	createCanvas(1450, 750);

	engine = Engine.create();
	world = engine.world;
	rect4_1 = new Rectangle(850, 500, "crimson");
	rect4_2 = new Rectangle(900, 500, "darkviolet");
	rect4_3 = new Rectangle(950, 500, "aquamarine");
	rect4_4 = new Rectangle(1000, 500, "salmon");
	rect4_5 = new Rectangle(1050, 500, "canary");
	rect4_6 = new Rectangle(1100, 500, "gold");
	rect4_7 = new Rectangle(1150, 500, "SandyBrown");
	rect3_1 = new Rectangle(900, 475, "SandyBrown");
	rect3_2 = new Rectangle(950, 475, "yellow");
	rect3_3 = new Rectangle(1000, 475, "orange");
	rect3_4 = new Rectangle(1050, 475, "Navy");
	rect3_5 = new Rectangle(1100, 475, "tomato"); 
	rect2_1 = new Rectangle(950, 400, "lime");
	rect2_2 = new Rectangle(1000, 400, "coral");
	rect2_3 = new Rectangle(1050, 400, "LightGreen");
	rect1_1 = new Rectangle(1000, 325, "DodgerBlue");
	ground = new Ground(725, 730, 1450, 10);
	ground2 = new Ground(1000, 550, 400, 10);

	hexagon = new Hexagon(100, 650, 20);
	chain = new SlingShot(hexagon.body, {x:200, y:400})

	Engine.run(engine);
}


function draw() {
	background("white");
	Engine.update(engine)
	rect4_1.display();
	rect4_2.display();
	rect4_3.display();
	rect4_4.display();
	rect4_5.display();
	rect4_6.display();
	rect4_7.display();
	rect3_1.display();
	rect3_2.display();
	rect3_3.display();
	rect3_4.display();
	rect3_5.display();
	rect2_1.display();
	rect2_2.display();
	rect2_3.display();
	rect1_1.display();
	ground.display();
	ground2.display();
	hexagon.display();
	chain.display();
	drawSprites();
}


function mouseDragged() {
    Matter.Body.setPosition(hexagon.body, {x:mouseX, y: mouseY});
}

function mouseReleased(num) {
	chain.fly();
}

function attachBody() {
	if (keyCode == 32) {
		chain.attach(hexagon.body );
	}
}

