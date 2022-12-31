
function setup() {
  createCanvas(800,800);
  background("orange");
  box = createSprite(400,400,60,60);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  if(keyDown(RIGHT_ARROW))
{
  background("mistyrose");
}
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("lightblue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("lightgreen");
  }


  
  drawSprites();
}

