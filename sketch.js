function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100);
  background(230, 40, 12);
}

function draw() {
  if (
    mouseX >= 0 && mouseX < width &&
    mouseY >= 0 && mouseY < height
  ) {
    noStroke();
    fill(frameCount % 360, 80, 100);
    circle(mouseX, mouseY, 30);
  }
}

function mousePressed() {
  background(230, 40, 12);
}
