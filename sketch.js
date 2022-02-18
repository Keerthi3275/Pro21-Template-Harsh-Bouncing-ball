var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "white";
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background("pink");
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    //write if condition to change the color of the ball when it touches block1
    // ball should bounce off
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = rgb(0,0,255);
    }
    
    //write if condition to change the color of the ball when it touches block2
    // ball should stop moving
    


     //write if condition to change the color of the ball when it touches block3
    // ball should bounce off
    

     //write if condition to change the color of the ball when it touches block4
    // ball should bounce off

    

    drawSprites();
}
