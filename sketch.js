var bg, bgImg;
var sleep, bath, brush, drink, eat, gym, move; 
var astronaut;


function preload() {
  bgImg = loadImage("iss.png");
  sleep = loadImage("sleep.png");
  bath = loadAnimation("bath1.png", "bath2.png");
  brush = loadAnimation("brush.png");
  drink = loadAnimation("drink1.png", "drink2.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  gym = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png");
  move = loadAnimation("move.png", "move1.png");
}


function setup() {
  createCanvas(800,400);
  
  bg = createSprite(400,200);
  bg.addImage(bgImg);
  bg.scale = 0.2;

  astronaut = createSprite(300, 230);
  astronaut.addImage(sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(255,255,255);  
  
  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("working out", gym);
    astronaut.changeAnimation("working out");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("m")) {
    astronaut.velocityX = 2;
    astronaut.velocityY = 5;
  }

  //createEdgeSprites();
  //astronaut.bounceOff(edges);


  drawSprites();
}