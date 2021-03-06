const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world, dirt1=[], grass=[], gold, titanium, hellstone, stone;
var lastPrism, TheCyborg, player, background, enchantedBook, sword, tree1, tree2, Boss, minion, drill;
var player;
var dirtImg = "images/dirt.png", grassImg = "images/Grass Block.png";
var playerImg = "images/player.png", cyborgImg = "images/The cyborg.png", minionImg = "images/Tyrant minion.png";

function preload (){
  
}

function setup (){
  var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    for (var dirt = 0; dirt < width; dirt = dirt+5) {
      dirt1.push( new Block(dirt, displayHeight-displayHeight/4,dirtImg));
    }

    for(var i = 0; i< width; i = i+5){
      grass.push( new Block(i, displayHeight-displayHeight/4-50,grassImg));
      
    }

    player = new Player(displayWidth/2,displayHeight/4-95,playerImg);
    TheCyborg = new Player(displayWidth/2,displayHeight/4-95,cyborgImg);
    minion = new Player(displayWidth/2,displayHeight/4-95,minionImg);

}
 function draw () {
  background(255);
  Engine.update(engine);

  for(var i = 0; i< dirt1.length; i = i+10){
    dirt1[i].display();
    
  }

  for(var i = 0; i< grass.length; i = i+10){
    grass[i].display();
    
  }

  player.display();
  TheCyborg.display();
  minion.display();
 }
