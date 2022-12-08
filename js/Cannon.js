class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.Cannon_base=loadImage("assets/cannonBase.png");
    this.cannon_img=loadImage("assets/canon.png");
  }
  display(){
    push();
    imageMode(CENTER);
    image(this.cannon_img,this.x,this.y,this.width,this.height)
    pop();
  
    image(this.Cannon_base,70,20,200,200);
    noFill();


  }
}
