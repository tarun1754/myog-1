const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score=0;
function preload(){

}

function setup(){
createCanvas(900,700);
engine = Engine.create();
world = engine.world;
basket=new Baskets(110,350);
ball=new Ball(650,550);
ground=new Ground(450,690,950,10);
counter=new Counter(110,240,10,20);
slingShot=new Slingshot(ball.body,{x:650,y:550});
}
function draw(){
  background("blue");
  Engine.update(engine);
  basket.display();
  ball.display();
  counter.display();
  slingShot.display();
  textSize(20);
  strokeWeight(5);
  stroke("black");
  text("score:"+score,110,680);
  if(isTouching(ball,counter)){
    score=score+1;
  }
    
  
}   
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly(ball.body);
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(ball.body);
  }
}
function isTouching(object1,object2){
  if (object1.body.position.x - object2.body.position.x < object2.body.width/2 + object1.body.width/2
    && object2.body.position.x - object1.body.position.x < object2.body.width/2 + object1.body.width/2
    && object1.body.position.y - object2.body.position.y < object2.body.height/2 + object1.body.height/2
    && object2.body.position.y - object1.body.position.y < object2.body.height/2 + object1.body.height/2) {
return true;
}
else {
  return false;
}
}