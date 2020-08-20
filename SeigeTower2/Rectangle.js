class Rectangle extends BaseClass {
    constructor(x, y, fill){
        super(x, y, 50, 75, fill);
        this.visibility = 255;
      }
      display() {
        console.log(this.body.speed);
        if (this.body.speed < 5) {
          super.display();
        }else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility -10;
          tint(255, this.visibility);
          pop();
        }
    }
}