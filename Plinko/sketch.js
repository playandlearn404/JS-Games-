const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	particle1 = new Particle(250, 50, 10, "lime");
	particle2 = new Particle(300, 50, 10, "lime");
	particle3 = new Particle(350, 50, 10, "lime");
	particle4 = new Particle(400, 50, 10, "lime");
	particle5 = new Particle(450, 50, 10, "lime");
	particle6 = new Particle(500, 50, 10, "lime");
	particle7 = new Particle(550, 50, 10, "lime");
	particle8 = new Particle(600, 50, 10, "lime");
	particle9 = new Particle(650, 50, 10, "lime");
	particle10 = new Particle(700, 50, 10, "lime");
	particle11 = new Particle(750, 50, 10, "lime");
	particle12 = new Particle(100, 100, 10, "lime");
	particle13 = new Particle(200, 50, 10, "lime");
	particle14 = new Particle(200, 100, 10, "lime");
	particle15 = new Particle(150, 50, 10, "lime");

	ball1 = new Ball(75, 200, 10, "tomato");
	ball2 = new Ball(150, 200, 10, "tomato");
	ball3 = new Ball(225, 200, 10, "tomato");
	ball4 = new Ball(300, 200, 10, "tomato");
	ball5 = new Ball(375, 200, 10, "tomato");
	ball6 = new Ball(450, 200, 10, "tomato");
	ball7 = new Ball(525, 200, 10, "tomato");
	ball8 = new Ball(600, 200, 10, "tomato");
	ball9 = new Ball(675, 200, 10, "tomato");
	ball10 = new Ball(750, 200, 10, "tomato");
	ball11 = new Ball(825, 200, 10, "tomato");
	ball12 = new Ball(900, 200, 10, "tomato");

	ball13 = new Ball(110, 275, 10, "tomato");
	ball14 = new Ball(185, 275, 10, "tomato");
	ball15 = new Ball(260, 275, 10, "tomato");
	ball16 = new Ball(343, 275, 10, "tomato");
	ball17 = new Ball(418, 275, 10, "tomato");
	ball18 = new Ball(493, 275, 10, "tomato");
	ball19 = new Ball(568, 275, 10, "tomato");
	ball20 = new Ball(643, 275, 10, "tomato");
	ball21 = new Ball(718, 275, 10, "tomato");

	ball22 = new Ball(75, 350, 10, "tomato");
	ball23 = new Ball(150, 350, 10, "tomato");
	ball24 = new Ball(225, 350, 10, "tomato");
	ball25 = new Ball(300, 350, 10, "tomato");
	ball26 = new Ball(375, 350, 10, "tomato");
	ball27 = new Ball(450, 350, 10, "tomato");
	ball28 = new Ball(525, 350, 10, "tomato");
	ball29 = new Ball(600, 350, 10, "tomato");
	ball30 = new Ball(675, 350, 10, "tomato");
	ball31 = new Ball(750, 350, 10, "tomato");
	ball32 = new Ball(825, 350, 10, "tomato");
	ball33 = new Ball(900, 350, 10, "tomato");

	ball34 = new Ball(110, 425, 10, "tomato");
	ball35 = new Ball(185, 425, 10, "tomato");
	ball36 = new Ball(260, 425, 10, "tomato");
	ball37 = new Ball(343, 425, 10, "tomato");
	ball38 = new Ball(418, 425, 10, "tomato");
	ball39 = new Ball(493, 425, 10, "tomato");
	ball40 = new Ball(568, 425, 10, "tomato");
	ball41 = new Ball(643, 425, 10, "tomato");
	ball42 = new Ball(718, 425, 10, "tomato");

	ground = new Wall(400, 680, 800, 10);
	wall0 = new Wall(0, 600, 10, 300);
	wall1 = new Wall(100, 600, 10, 300);
	wall2 = new Wall(200, 600, 10, 300);
	wall3 = new Wall(300, 600, 10, 300);
	wall4 = new Wall(400, 600, 10, 300);
	wall5 = new Wall(500, 600, 10, 300);
	wall6 = new Wall(600, 600, 10, 300);
	wall7 = new Wall(700, 600, 10, 300);
	wall8 = new Wall(800, 600, 10, 300);

	

	Engine.run(engine);
}


function draw() {
	background("black");
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
	ball6.display();
	ball7.display();
	ball8.display();
	ball9.display();
	ball10.display();
	ball11.display();
	ball12.display();

	ball13.display();
	ball14.display();
	ball15.display();
	ball16.display();
	ball17.display();
	ball18.display();
	ball19.display();
	ball20.display();
	ball21.display();

	ball22.display();
	ball23.display();
	ball24.display();
	ball25.display();
	ball26.display();
	ball27.display();
	ball28.display();
	ball29.display();
	ball30.display();
	ball31.display();
	ball32.display();
	ball33.display();

	ball34.display();
	ball35.display();
	ball36.display();
	ball37.display();
	ball38.display();
	ball39.display();
	ball40.display();
	ball41.display();
	ball42.display();

	ground.display();
	wall0.display();
	wall1.display();
	wall2.display();
	wall3.display();
	wall4.display();
	wall5.display();
	wall6.display();
	wall7.display();
	wall8.display();

	particle1.display();
	particle2.display();
	particle3.display();
	particle4.display();
	particle5.display();
	particle6.display();
	particle7.display();
	particle8.display();
	particle9.display();
	particle10.display();
	particle11.display();
	particle12.display();
	particle13.display();
	particle14.display();
	particle15.display();

	drawSprites();
}


