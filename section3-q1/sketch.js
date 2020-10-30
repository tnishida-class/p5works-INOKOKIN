// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46");
}

function balloon(t){
  push();
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 50;
  noStroke();
  fill(150);
  rect(50, 50, w + p * 2, h + p * 2);
  fill(0,0,255);
  text(t, p + 50, h + p + 50);
  fill(150);
  triangle(w+p*2+50, h+p*2+50, w+p*2+50, h+p*2+75, w+p*2-25, h+p*2+50);
  pop();
}
