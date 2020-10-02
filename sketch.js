var monkey, monkey_running, ground;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup, bananaGroup, survialTime;
var score = 0;
var PLAY = 1,
  END = 0,
  gameState = PLAY;




function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}

function setup() {
  createCanvas(600, 400);

  monkey = createSprite(50, 300, 40, 40);
  monkey.addAnimation("monkey", monkey_running)
  monkey.scale = 0.1;
  ground = createSprite(300, 380, 600, 10);

  bananaGroup = new Group();
  obstacleGroup = new Group();
  monkey.debug = false;
  

}



function draw() {
  background("lightgreen");
text("SCORE : "+score, 380,50);
  if (gameState == PLAY) {
    spawnOBSTACLES();
    spawnBANANA();
    if (keyDown("space") && monkey.y > 344) {
      monkey.velocityY = -15;

    }

    monkey.velocityY = monkey.velocityY + 0.5;

    monkey.collide(ground);
    if(monkey.isTouching(bananaGroup)){
      score = score +1;
      bananaGroup.destroyEach()
       }
    
    
    if(monkey.isTouching(obstacleGroup)){
       gameState = END;
       }
    
  } 
  else if (gameState===END) {
    background("black");
    fill("yellow");
    text("GAME OVER" ,300,200);
  }






  drawSprites();

}



function spawnOBSTACLES() {


  if (frameCount % 100 === 0) {

    obstacle = createSprite(580, 340, 10, 10);
    obstacle.debug = false;
    obstacle.setCollider("circle",0,0,60);
    obstacleGroup.add(obstacle);
    obstacle.addImage("obstacle", obstacleImage)
    obstacle.scale = 0.2;
    obstacle.velocityX = -5

  }
}


function spawnBANANA() {


  if (frameCount % 60 === 0) {

    banana = createSprite(580, 200, 10, 10);
    bananaGroup.add(banana);
    banana.addImage("banana", bananaImage)
    banana.scale = 0.1;
    banana.velocityX = -5

  }


}