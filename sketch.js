var canvas,surface1,surface2,surface3,surface4;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 =createSprite(800,600,40,10)
surface1.shapeColor ="blue"

surface2 =createSprite(700,600,40,10)
surface2.shapeColor ="green"

surface3 =createSprite(600,600,40,10)
surface3.shapeColor ="yellow"

surface4 =createSprite(500,600,40,10)
surface1.shapeColor ="pink"

    //create box sprite and give velocity
    box =createSprite(random(20,750),300,40,10)
    box.shapeColor ="white"
    box.velocityX =2;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
createEdgeSprites()


    //add condition to check if box touching surface and make it box
    if()
}
