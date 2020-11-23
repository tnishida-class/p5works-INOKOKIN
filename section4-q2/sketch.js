// テキスト「アニメーション」
let x, y, vx, vy;
let cx, cy, angle;
let count;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
  cx = 0;
  cy = 0;
  angle = 0;
  count = 0;
}

function draw(){
  background(0);
  // BLANK[2] (hint: 作った star 関数を使います)
  x += vx;
  y += vy;
  star(x, y, 20, PI / 36);
  // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
}

function star(cx, cy, r, angle){
   count += 1;
 beginShape();
   for(var i = 0; i < 20; i++){ //var = 型推論、型名を省略できる
   var theta = TWO_PI * i * 2 / 5 - HALF_PI + count * angle;
   var x = cx + cos(theta) * r;
   var y = cy + sin(theta) * r;
   vertex(x,y);
 }
 endShape(CLOSE);
//section 4-q1を応用して変数を利用する。
//count をfunction内で増加させることで回転をつけることができる。
//ずっと考え続けて、答えにたどり着いた時はとても嬉しかったです。
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
