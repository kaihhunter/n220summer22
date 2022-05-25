function setup() {
    createCanvas(400,400);
    noLoop();
}

function draw() {
    background(220);
    var diameter=width;
    while(diameter>=10) {
        circle(width/2, height/2, diameter);
        diameter-=10;
    }
}

