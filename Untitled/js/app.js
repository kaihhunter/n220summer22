function drawblackcircle() 
{
    var x=100
    for(var i=0,i<250;i+=50)
{
    fill(0);
    ellispse(i,x,50,50);
    if(i-3==0)
{
    fill(153,30,240);
    ellipse(i,x,50,50);
}
if(i-5==0)
{
    fill(0,255,0);
    square(i+25,x-25,50);
}
if(i-3==0,i-5==0)
{
    fill(0,0,255);
    square(i+25,x-25,50);
}
}
}



