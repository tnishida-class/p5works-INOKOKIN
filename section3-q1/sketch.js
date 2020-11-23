// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love piko_taro", 70, 70);
}

function balloon(t, x, y){
  push();
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 50;
  noStroke();
  fill(100);
  rect(x, y, w + p * 2, h + p * 2);
  fill(0,0,255);
  text(t, x + p, y + h + p);
  fill(100);
  triangle(w+p*2+x, h+p*2+y, w+p*2+x-30, h+p*2+y, w+p*2+x, h+p*2+y+50);
  pop();
}
//引数を利用して自由に吹き出しの位置を変えられるように変更しました。
