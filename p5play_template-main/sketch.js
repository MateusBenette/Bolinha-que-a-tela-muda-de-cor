//crie o sprite da bola
var ball;
function setup() {
  createCanvas(400,400);
  //crie o sprite da bola
ball = createSprite(200,200,10,10);
}

function draw() {
  background("blue");
  if (keyIsDown(RIGHT_ARROW)) {
    ball.position.x += 5;
    background("yellow");
  }
  if (keyIsDown(LEFT_ARROW)) {
    ball.position.x -= 5;
    background("red");
  }
  if (keyIsDown(DOWN_ARROW)) {
    ball.position.y += 5;
    background("green");
  }
  if (keyIsDown(UP_ARROW)) {
    ball.position.y -= 5;
    background("blue");
  }
  drawSprites();
}