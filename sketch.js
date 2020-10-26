var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var dropzone1,dropzone2,dropzone3;
 var ground2;
 

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	dropzone1= createSprite(384,665,135,18);
	dropzone1.shapeColor = "red";

	dropzone2= createSprite(320,615,10,90);
	dropzone2.shapeColor = "red";

    dropzone3= createSprite(450,615,10,90);
	dropzone3.shapeColor = "red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height -35, width,6);
	groundSprite.shapeColor=color(255)

	groundSprite2=createSprite(width/2, height -30, width,6);
	groundSprite2.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 groundSprite.visible = true

     ground2 = Bodies.rectangle(width/2, 655, width, 15 , {isStatic:true} );
	 World.add(world, ground2);


	Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

  Matter.Body.setStatic(packageBody,false);  

}
}