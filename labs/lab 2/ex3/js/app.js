function setup() {
    createCanvas(800,600);
    circleX=0
    fill(255,0,0);
}

function draw() {
    background(200);
    circle(circleX,height/2);
    circleX=(circleX+5);
}