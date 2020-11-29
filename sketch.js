var database,game,form,player,allPlayers;
var playerCount = 0;
 var gameState = 0;
 var car1,car2,car3,car4,cars = [];


function preload(){
trackImage = loadImage("sprites/track.jpg");
car1Image = loadImage("sprites/car1.png");
car2Image = loadImage("sprites/car4.png");
car3Image = loadImage("sprites/car3.png");
car4Image = loadImage("sprites/car2.png");
}
function setup(){
    database = firebase.database();
    
    createCanvas(displayWidth,displayHeight);
    game = new Game();
    game.getGameState();
  
    game.start();
   
}

function draw(){
  
    if(playerCount === 4){
         game.updateGameState(1); 
        }
     if(gameState === 1){
         
          clear(); game.play(); 
        }

  
   
}

