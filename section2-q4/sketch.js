// 大英帝国国旗 Great Britain
function setup() {
  const blue = color(0, 0, 255);
  const red = color(255, 0, 0);
  const white = color(255);
  createCanvas(270, 180);
  noFill();
  background(white);
  let d = height / 6;  // 縞1本の太さ =30

  fill(blue);
  rect(0, 0, 270, 180);

  stroke(white);  //stroke(color...)は枠線の色を指定
  strokeWeight(d);
  crossmark(0, 0, 270, 180);

  stroke(red);
　strokeWeight(d/3);
  crossmark(0, 0, 270, 180);

  stroke(white);  //noStroke();でも良いが後々に響く
  fill(white);
  rect(0, 75, 270, 30);
  rect(120, 0, 30, 180);

  stroke(red);
  fill(red);
  rect(0, 83, 270, 15);
  rect(128, 0, 15, 180);

}

function crossmark(x1, y1, x2, y2){
  line(x1, y1, x2, y2);
  line(x2, y1, x1, y2);
}
