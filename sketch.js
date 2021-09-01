var sea;
var ship;
var  seaImg,ship1Img;


function preload(){
 seaImg = loadImage("sea.png");
 ship1Img=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}





function setup(){
  createCanvas(600,300);

  sea = createSprite(10,200,600,300);
  sea.addImage(seaImg);
  sea.velocityX=-3
  sea.scale=0.5

  ship = createSprite(200,220);
  ship.addAnimation("ship",ship1Img);
  ship.scale=0.2
  


}

function draw() {
  background("white");

  if(sea.x < 0){
    sea.x = sea.width/2;


  }
  drawSprites();
 
}