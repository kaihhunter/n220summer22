function setup()
{
    createCanvas (711,401);
    createGraphics(401,250)
}
function draw()
{
    fill(0,12)
    rect(0,0);
    fill(255);
    noStroke();
    ellipse(mouseX,mouseY,60,60);
    nofill();
    background(51);
    stroke(255);
    ellipse(mouseX-150,mouseY-75,60,60);
    Image(pg,150,75)
}
