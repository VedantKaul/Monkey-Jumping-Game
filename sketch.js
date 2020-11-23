var monkey , monkey_running;
var banana ,bananaImage, obstacleImage, obstacle;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
 
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  
  ground = createSprite(400, 380, 800, 5);
  ground.velocityX = -3;
  ground.shapeColor = "green";
  
  monkey = createSprite(280, 380);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  score = 0;
  
  }

function draw() {
  
  createCanvas(600, 400);
                                                       
  if(ground.x>0){
  ground.x = ground.width/2;  
  }
  
  monkey.collide(ground);
  
  obstacles();
  bananas();
  
  if(keyDown("space") && monkey.y >= 346.8){
  monkey.velocityY = -16;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  stroke("black");  
  textSize(20);
  fill("black");
  score = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+score, 200, 50);

  drawSprites();
}

function obstacles(){
  
if(World.frameCount % 300 === 0){
  obstacle = createSprite(600, 380);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2;
  obstacle.setCollider("rectangle", -30, 0, 450, 380);
  obstacle.collide(ground);
  obstacle.velocityX = -3;
  obstacle.lifetime = 200;
  
  }
  }

function bananas(){
  var rand = Math.round(random(120, 200))
  
  if(World.frameCount % 80 === 0){
  banana = createSprite(600);
  banana.addImage(bananaImage);
  banana.velocityX = -3;
  banana.scale = 0.1;
  
  banana.y = rand;
  banana.lifetime = 200;
  return banana;
  }
}