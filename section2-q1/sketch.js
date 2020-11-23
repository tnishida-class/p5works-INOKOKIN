// 小手調べ
function setup(){
  noFill();
  for(let i = 1; i<=10 ; i++){
    let x =i*9
    stroke(0,0,255);
    if(5<i){
      stroke(255,0,0);
    }
    ellipse(50,50,x);
    // BLANK[1]
  }

}
