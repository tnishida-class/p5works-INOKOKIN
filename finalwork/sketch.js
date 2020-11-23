// 最終課題を制作しよう
let =x, y;

function setup(){
  createCanvas(windowWidth, windowHeight);

  


}

function draw(){
  push();
  background(160, 192, 255);
  fill(0);
  rect(x, windowHeight - 10, 30, 10);
  if(keyIsDown(LEFT_ARROW)){
    x -= 7;
  }
  if(keyIsDown(RIGHT_ARROW)){
    x += 7;
  }
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
