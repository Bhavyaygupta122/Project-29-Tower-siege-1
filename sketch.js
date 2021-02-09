const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,ground2,ground3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12;
var block13,block14,block15,block16,block17,block18;
var holder,ball,slingShot;

function preload(){
    ballImage = loadImage("polygon.png");
}

function setup(){
    createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
    
    ground1 = new Ground(width/2,670,width,20);
    ground2 = new Ground(490,500,200,20);
    ground3 = new Ground(1100,300,280,20);

    //1 platform
    //level1
    block1 = new Block(430,235,30,40);
    block2 = new Block(460,235,30,40);
    block3 = new Block(490,235,30,40);
    block4 = new Block(520,235,30,40);
    block5 = new Block(550,235,30,40);
    //level2
    block6 = new Block(460,195,30,40);
    block7 = new Block(490,195,30,40);
    block8 = new Block(520,195,30,40);
    //level3
    block9 = new Block(490,155,30,40);
   
    //2 platform
    block10 = new Block(1050,155,30,40);
    block11= new Block(1020,155,30,40);
    block12 = new Block(990,155,30,40);
    block13= new Block(1080,155,30,40);
    block14= new Block(1110,155,30,40);

    block15= new Block(1020,115,30,40);
    block16= new Block(1050,115,30,40);
    block17= new Block(1080,115,30,40);

    block18=new Block(1050,65,30,40);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingShot = new SlingShot(this.ball,{x:100,y:450});

    Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
    Engine.update(engine);
    background("green");

    push();
    stroke("beige");
    strokeWeight(4);
    textSize(30);
    text("Drag the hexagonal stone and release it to launch it towards the tower blocks and destroy them", 80, 50);
    pop();
  
    ground1.display();
    ground2.display();
    ground3.display();

    fill("red");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    fill("blue");
    block6.display();
    block7.display();
    block8.display();

    fill("yellow");
    block9.display();

    fill("purple")
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    
    fill("pink")
    block15.display();
    block16.display();
    block17.display();

    fill("cyan")
    block18.display();
    
    imageMode(CENTER);
    image(ballImage, ball.position.x, ball.position.y, 50, 45);  

    slingShot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly();
}