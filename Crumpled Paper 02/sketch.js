
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var bin, paper, ground;	
var world;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
    bin = new Bin(1430, 560, 200, 200);
    wall1 = new Wall(1330, 560, 10, 200);
    wall2 = new Wall(1530, 560, 10, 200);
	paper = new Paper(200,450,20);
	ground = new Ground(width/2,670,width,20);


	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  wall1.display();
  wall2.display();
  paper.display();
  ground.display();
  bin.display();
  
  

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
        Matter.Body.setStatic(bin.body, false)
    	Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-200});
  	}
}
