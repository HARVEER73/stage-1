var rimpy,rimpyImage;
var kidnapper;
var  rocks,car,barrier;
var bg;
var ground,groundImage;







function preload()
{
  groundImage = loadImage("ground2.png");
  rock1 = loadImage("rock-removebg-preview.png");
  rock2 = loadImage("rock2-removebg-preview.png");
  car1 = loadImage("car1-removebg-preview.png");
  car2 = loadImage("car2-removebg-preview.png");
  barrier = loadImage("barrier-remvebg-preview.png");
  rimpy = loadImage("boy-removebg-preview.png");
}

function setup() {
  createCanvas(700,500);
  frameRate(80);

  
  ground = createSprite(200,480,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;

  invisibleGround = createSprite(200,489,400,20);
  invisibleGround.visible = false;
  
  rimpy = createSprite(50,460,20,50)
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  if(keyDown("space") && rimpy.y >= 400) {
    rimpy.velocityY = -12;
  }
  rimpy.velocityY = rimpy.velocityY + 0.8

  rimpy.collide(invisibleGround)
  
  
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: car1.addImage(car1);
              break;
      case 1: car2.addImage(car2);
              break;        
      case 2: rock1.addImage(rock1);
              break;
      case 2: rock2.addImage(rock2);
              break;
      case 3: barrier.addImage(barrier);
              break;
      default: break;
    }
  }
