let spacing = 25;
let x = 0;
let y = 0;
let probability;

function setup() {
  createCanvas(400, 400);
  background(0, 255, 80);
  strokeWeight(10);
}

function draw() {
  probability = random(0, 1);

  if (probability < 0.5) {
    line(x, y + spacing, x + spacing, y);
	stroke(255)
  } else {
    line(x, y, x + spacing, y + spacing);
	stroke(0)
  }

  x = x + spacing;

  if (x > width) {
    x = 0;
    y = y + spacing;
  }
}
