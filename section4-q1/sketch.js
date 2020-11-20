// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;


function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(150, 100, 50);
  count = (count + 1) % cycle;
  // BLANK[1]
  if(count > 49){
    size = 50 - (count-50);
  }
  else{
    size = count;
  }

  ellipse(width / 2, height / 2, size);
}
