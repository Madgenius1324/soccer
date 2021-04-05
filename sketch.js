var database,game,player;
var gameState=0;
var playerCount=0;
var form;
var bg;
var blue,red;
var car1,car2,cars,allPlayers;
function preload(){
bg=loadImage("New Piskel.png");
blue=loadImage("idle blue.png");
red = loadImage("idle red.png");
}

function setup(){
createCanvas(displayWidth,displayHeight);
database=firebase.database();
game=new Game();
}

function draw(){
background("black");
if(gameState===0){
  game.start()
  game.getState()
}
if(playerCount===2){
 game.update(1)
  
}
if(gameState===1){
  clear();
  
  game.play();
}
if(gameState===2){
  game.end();
}
}