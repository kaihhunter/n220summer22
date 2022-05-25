function setup() {
    createCanvas(200,200);
    fill(255,0,0);
    stroke(225);
}

function draw() {
    background(255);
    for(var i=0;i<4;i++) {
        for(var j=0;j<=i;j++){
           rect(i*52,20,50,50)
        
        }
    }
}
