const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;
var ground, ball, rope;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, 380 ,1200,20);
   

    box1 = new Box(700,30,50,50);
    box2 = new Box(700,30,50,50);
    box3 = new Box(700,30,50,50);
    box4 = new Box(700,30,50,50);
    box5 = new Box(700,30,50,50);
    box6 = new Box(700,30,50,50);
    box7 = new Box(700,30,50,50);
    box8 = new Box(700,30,50,50);
    box9 = new Box(700,30,50,50);
    box10 = new Box(700,30,50,50);
    box11 = new Box(700,30,50,50);
    box12 = new Box(700,30,50,50);
    ball = new Ball(200, 200, 70, 70)





  
}

function draw(){

    ground.display();

    box1.display();
   
    ball.display();

}
 

