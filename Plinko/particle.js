class Particle {
    constructor(x, y, radius, fill) {
      var options = {
          isStatic:false,
          'restitution':0,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.fill = fill;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(this.fill);
      ellipse(0, 0, this.radius);
      pop();
    }
}