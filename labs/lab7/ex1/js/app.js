function setup() {
    // create canvas
    createCanvas(710, 400);
  
    input = createInput();
    input.position(20, 65);
  
    button = createButton('submit');
    button.position(input.x + input.width, 65);
    button.mousePressed(() => {greet(input.value())});
  
    greeting = createElement('h2', 'what is your name?');
    greeting.position(20, 5);
  
    textAlign(CENTER);
    textSize(50);
  }
  
  function greet(name) {
    greeting.html('Hello ' + name);
    input.value('');
    console.log("Hello " + name);
  }
  