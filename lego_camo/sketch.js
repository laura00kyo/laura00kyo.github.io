let gridSize = 50;
let cellSize;

let x = 0;
  let y = 0;

function setup() {
  
  let w;
  
  if(windowWidth % gridSize > 0){
    w = windowWidth - (windowWidth % gridSize)
  }

  
  // createCanvas(w, w);
  
  createCanvas(windowWidth,windowHeight);

  
  cellSize = width / gridSize;
  // noLoop();
}


function draw() {
  
  
    let num = int(random(1, 5));
    let colour;

    switch (num) {
      case 1:
        colour = color('#FF1B25'); // red
        break;
      case 2:
        colour = color('#FF961E'); // orange
        break;
      case 3:
        colour = color('#9289EB'); // light blue
        break;
      case 4:
        colour = color('#64499C'); // dark blue
        break;
    }

    fill(colour);
    noStroke();

    for (let i = 0; i < num; i++) {
      if (x >= width) {
        x = 0;
        y += cellSize;
      }
      rect(x, y, cellSize, cellSize);
      x += cellSize;
    }

    if (y >= height) {
      noLoop();
    }
  
}

function mouseClicked(){
  y = 0;
    x = 0;
  loop();
  background(255);
    
  
}