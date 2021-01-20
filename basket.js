class Baskets{
    constructor(x,y){
        var options={
        isStatic : true
        }
    this.body = Bodies.rectangle(x, y,230, 200, options);
    this.width = 230;
    this.height = 200;
    this.image=loadImage("images/baskt.jpg");
    World.add(world, this.body);
    }
display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
    pop();
}

}