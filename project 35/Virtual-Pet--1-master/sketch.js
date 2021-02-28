var dog = createSprite(200,200,20,20);
var dogAnimation;
var milk;
function preload()
{
	dogAnimation.preload(images/dogImg.png);
  milk.preload(images/Milk);
}

function setup() {
	createCanvas(800, 700); 
}


function draw() {  

  dog.Image("dogAnimation");

  drawSprites();
}



