var gamestate = "start";
var live = 2;
var score = 0;
var paddle;
var startBTN;
var bricks = createGroup();

var ball;
function setup (){
createCanvas(500,300);
 ball = createSprite(200,200,25,25)
  paddle = createSprite(200, 350, 120, 10);
 //startBTN.createImg("images.png")
 //startBTN.position(200,200)
 //startBTN.size(50,50)
 //startBTN.mouseClicked(pressed)

 //var bricks = createGroup();





}


function draw() {
  background("black");
 
  
  paddle.x = mouseX;
  ball.velocityX = 10;
  ball.velocityY = 6;
 
paddle.shapeColor = "blue";

//createEdgeSprites();
ball.velocityX = 10;
  ball.velocityY = 6;
  //var bwin = createSprite()
  
  




//if(ball.isTouching(bottomEdge)&&live>0) {
 // live = live - 1;
//} 
//if(live === 0){
 // gameOver();
//}

  drawSprites();
}

//function mousePressed(){
 // ball.velocityX = 10;
 // ball.velocityY = 6;


  //if(gamestate == "start"){
  //  gamestate = "play";
 //   ball.velocityY = -7;
 //   ball.velocityX = -7;
//  }
//}


 //function gameOver () {
 // text("GAME OVER",200,200)
 // ball.velocityX = 0;
 // ball.velocityY = 0;
  
//}
createBrickRow(65, "grey");
createBrickRow(65+31, "yellow");
createBrickRow(65+31+31, "green");
createBrickRow(65+31+31+31, "red");

function createBrickRow(y, color) {
  for(var i=0; i<6; i++)
  {
    var brick = createSprite(65+54*i,y,50, 25);
    brick.shapeColor = color;
    bricks.add(brick);
  }

  createEdgeSprites();
}