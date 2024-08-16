function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (mouseIsPressed){
        rect(mouseX, mouseY, 20 ,35)
        stroke('red')
        fill('red')
      }
}
