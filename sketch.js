const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var enemy,enemy2;
var log,log2;

var bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,580,70,70);
    box2 = new Box(920,580,70,70);

    enemy= new Enemy(810,580);

    log=new Log(810,440,300,PI/2);

    box3= new Box(700,420,70,70);
    box4= new Box(920,420,70,70);

    enemy2= new Enemy(810,420);

    log2=new Log(810,320,300,PI/2);

    box5=new Box(810,320,70,70);

    log3=new Log(760,200,150,PI/7);
    log4=new Log(870,200,150,-PI/7);

    bird=new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();

    box1.display();
    box2.display();

    enemy.display();
    log.display();

    box3.display();
    box4.display();

    enemy2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
}