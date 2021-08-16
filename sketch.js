
var carImg;
function preload()
{
  carImg=loadImage("car.png");
}

function setup() {
  createCanvas(600, 400);

  car1 = createSprite(100,350);
  car1.addImage(carImg);
  car1.scale=.2;
}
function draw() {
  //setting the background
  background("lightblue");
  

  drawSprites();
}
