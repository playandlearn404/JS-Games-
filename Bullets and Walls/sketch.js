var wall, thickness;
var bullet, speed, thickness;

function setup() {
  createCanvas(1800,800);
  wall = createSprite(1200, 400, thickness, height / 2);
  thickness = random(22, 83); 
  weight = random(30, 52);
  speed = random(223, 321);
  
  bullet = createSprite(100, 400, 20, 20);
  bullet.velocityX = random(10, 35);
}

function draw() {
  background(0,0,0);  
  if (hasCollided(bullet, wall)) {
    if (damageCalculator(speed, thickness, weight) > 10) {
        bullet.shapeColor = "red"
    }
    else{
        bullet.shapeColor = "green"
    }
  }
  drawSprites();
}