var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1;
var box2;
var box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageSprite=createSprite(width/2, groundSprite.y-10, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	box1 = createSprite(400, groundSprite.y-17, 200, 20);
	box1.shapeColor = color(255,0,0);
	box2 = createSprite(490, groundSprite.y-60, 20, 100);
	box2.shapeColor = color(255,0,0);
	box3 = createSprite(310, groundSprite.y-60, 20, 100);
	box3.shapeColor = color(255,0,0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	box1 = Bodies.rectangle(400, groundSprite.y-17, 200, 20, {isStatic:true} );
 	World.add(world, box1);
	box2 = Bodies.rectangle(490, groundSprite.y-60, 20, 100, {isStatic:true} );
 	World.add(world, box2);
	box3 = Bodies.rectangle(310, groundSprite.y-60, 20, 100 , {isStatic:true} );
 	World.add(world, box3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if (packageBody.y<=groundSprite.y-20) {
	//packageBody.y = groundSprite.y-17;
	Matter.Body.setStatic(packageBody,true);
  }


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
    
  }
  
}
