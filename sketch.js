const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snow, snow1,snow2,snow3,snow4;
var engine, world;
var drops = [];
var rand;
var maxDrops=10;
var snowCreatedFrame=0;
var bgImg;

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(600,600);
    bgImg = loadImage("snow1.jpg");
    if(frameCount % 50000 === 0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new snowflake(random(0,600), random(0,600)));
        }
    }
}

function draw(){
    Engine.update(engine);
    background(bgImg); 
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY();
    }
    drawSprites();
}