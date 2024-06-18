let shapes = [];
let colors = ['#FF1B25', '#FF961E', '#9289EB', '#64499C'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateShapes();
}

function draw() {
  background(255);
  for (let shape of shapes) {
    shape.update();
    shape.display();
    shape.multiply();
  }
}

function generateShapes() {
  shapes = [];
  for (let i = 0; i < 10; i++) {
    shapes.push(new Shape(random(width), random(height)));
  }
}

class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(10, 30);
    this.angle = 0;
    this.speed = random(1);
    this.directionX = random() > 0.5 ? 1 : -1;
    this.directionY = random() > 0.5 ? 1 : -1;
    this.color = random(colors);
  }

  update() {
    this.x += this.speed * this.directionX;
    this.y += this.speed * this.directionY;

    if (this.x < 0 || this.x > width) {
      this.directionX *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.directionY *= -1;
    }

    this.angle += 0.05;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    noStroke();
    fill(this.color);
    ellipse(0, 0, this.size);
    pop();
  }

  multiply() {
    if (random(1) < 0.01) {
      shapes.push(new Shape(this.x, this.y));
    }
  }
}

function mouseClicked() {
  generateShapes();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  generateShapes();
}