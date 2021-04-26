var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var gameState = "play"
var particles = [];
var plinkos = [];
var divisions = []
var divisionHeight=300;
var line;

var score =0;
var particle;
var count=0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

if(particle!=null){
  particle.display();

  if(particle.body.position.y>760){
  
    if(particle.body.position.x<300){
      score=score+500;
      if(count>=5) gamestate="end"
      particle=null;
   
    }
  

  else if(particle.body.position.x>301 && particle.body.position.x<600){
  
      score=score+100
      
      if(count>=5) gamestate="end"
      particle=null;
      
    }


  else if(particle.body.position.x>601 && particle.body.position.x<900){
    
      score=score+200
      if(count>=5) gamestate="end"
      particle=null;
    }
  }
}

textSize(30)
text("500",20,550)
text("500",100,550)
text("500",180,550)
text("500",260,550)

textSize(30)
text("100",340,550)
text("100",420,550)
text("100",500,550)

textSize(30)
text("200",580,550)
text("200",660,550)
text("200",740,550)

  Engine.update(engine);

  if(gameState === "end"){
    textSize(50)
    text("GAME OVER", 500,100)
  }

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     
  // }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if (gameState !== "end"){
count++;

 particle = new Particle(mouseX,0,10)
  }

}
