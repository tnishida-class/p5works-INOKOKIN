// 最終課題を制作しよう
//インベーダーゲームの政策を目指しました。
//残念ながら敵を撃墜することはできませんが、迫撃砲を飛ばすことはできます。

let x,y;
let cx, cy;
let count, cycle, dy;
let animate;
let px, py;



function setup(){
  createCanvas(windowWidth, windowHeight);
  x = 1/2 * width;
  y = 4/5 * height;

  cy = 4/5 * height -30;
  animate = false;

  count = 0;
  cycle = 600;
  dy = 0;

  px = 0;
  py = 0;
}

function draw(){
  background(0);
  fill(150);

  aircraft();
  shotGun();

  invader();
}

function aircraft(){
  push();
  noStroke();
  triangle(x, y, x+40, y, x+20, y-30);
  triangle(x, y+10, x, y+20, x-15, y+20);
  triangle(x+40, y+10, x+40, y+20, x+55, y+20);
  rect(x, y, 40, 20);
  if(keyIsDown(LEFT_ARROW)){x -= 4;}
  if(keyIsDown(RIGHT_ARROW)){x += 4;}
  pop();
}
//味方の飛行戦艦、左右に動くことができる
//かっこいいフォルム

function shotGun(){
  if(animate){
    cy -= 7;
  }
  if(cy < 0){
    cy = 4/5 * height - 30;
    animate = !animate;
  }
  ellipse(x+20, cy, 7);
}
//戦艦の迫撃砲
//Aを押した後、画面外へ球が消える前に再度Aを押すと止まってしまうのが難点

function keyPressed(){
  if(keyIsDown("A".charCodeAt(0))){
    animate = !animate;
  }
}
//迫撃砲を戦艦に積んだままにできるミソの部分

function invader(){
  fill(255, 0, 0);
  for(let i = 0; i < 9; i ++){
   for(let j = 0; j < 4; j ++){
    rect(i * 80 + px, j * 50 + py, 50, 30);
    }
  }
  count = (count + 1) % cycle;
  if (count > 300){
    px -= 2;
  }
  else{
    px += 2;
  }
}
//敵の動き
//動きが逆になるときに下段に降りるような仕組みを作りたかったが、実力不足(pyをどう使うか)

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
