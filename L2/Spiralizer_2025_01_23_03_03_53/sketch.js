let pendulumData; // csv
let rows = []; 

function preload() {
  pendulumData = loadTable('pendulum.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 800);
  rows = pendulumData.getRows(); // load csv rows
  noLoop();
}

function draw() {
  background(30);
  translate(width / 2, height / 2); // centering
  
  let angleOffset = 0; // rotation per swing
  
  for (let i = 0; i < rows.length; i++) {
    let swings = int(rows[i].get('Swings')); // "swings" value
    let radius = map(i, 0, rows.length, 50, width / 2); // map radius to spread points out
    
    for (let j = 0; j < swings; j++) {
      let angle = map(j, 0, swings, 0, TWO_PI) + angleOffset;
      let x = radius * cos(angle);
      let y = radius * sin(angle);
      
      // swings to vary size and color
      let col = map(swings, 10, 30, 100, 255);
      fill(col, 200, 255 - col, 150);
      noStroke();
      ellipse(x, y, swings / 2, swings / 2); // size varies with swings
    }
    angleOffset += 0.01; // slight offset
  }
}