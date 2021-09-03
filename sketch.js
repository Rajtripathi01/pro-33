const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var bg;

function preload() {
bg=loadImage("snow2.jpg")





}


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  World = engine.world;

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
   for (var j = 75; j <=width; j=j+50) {
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,175));
   }

   for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275));
   }

   for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,375));
   }
   
}


 function draw(){
  background(bg)
  Engine.update(engine);


  snow.display()
}


