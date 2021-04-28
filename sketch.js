var path,mainCyclist,Player2;
var pathImg,mainRacerImg1,mainRacerImg2;
var END =0;
var PLAY =1;
var gameState = PLAY;
var distance=0;
var bellsound;


function preload(){
  pathImg = loadImage("images/Road.png"); mainRacerImg1=loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  oppPinkImg= loadAnimation("images/mainPlayer3.png");
  bellsound=loadSound("sound/bell.mp3");
  oppImg=loadAnimation("images/mainPlayer2.png");
  
}

function setup(){

createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
pinkCG=new Group();
blueCG=new Group();
  
}

function draw() {
  background(0);
  //textSize(20);
  //fill(255);
  text("Distance:"+distance,400,200);
  distance=distance+10;
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
   if(keyDown("Space")){
     bellsound.play();
   }
    
    var select_oppPlayer=Math.round(random(1,2));
  
    
    
    if(World.frameCount%150 == 0){
    if(select_oppPlayer == 1){
      pinkCyclists();
    }
    if(select_oppPlayer==2){
      blueCyclists();
    }
  } 
  //code to reset the background
 
    if(path.x < 0 ){
    path.x = width/2;
  }
    
 }
  drawSprites();
}
function pinkCyclists(){
  Player2=createSprite(200,Math.round(random(50,250),10,10))
  Player2.scale=0.06;
  Player2.addAnimation("opponetPlayer3",oppPinkImg);
  Player2.velocityX=2;
  pinkCG.setLifetime=170;
  pinkCG.add(Player2); 
}
function blueCyclists(){
  Player3=createSprite(100,Math.round(random(50,250),10,10))
  Player3.scale=0.06;
  Player3.addAnimation("opponetPlayer2",oppImg);
  Player3.velocityX=2;
  blueCG.setLifetime=170;
  blueCG.add(Player3); 
}