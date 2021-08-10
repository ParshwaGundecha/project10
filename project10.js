var ship,ship_moving;
var sea,sea_moving;

function preload(){
sea_moving = loadAnimation("sea.png")
ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200)
   sea.addAnimation("running",sea_moving);
   sea.scale=0.2;

   ship = createSprite(100,200,);
   ship.addAnimation("running",ship_moving);
   ship.scale=0.2;

}


function draw() {
  background("white");
 
  if(sea.x<0){
    sea.x = sea.width/2;
  }
  drawSprites();
}