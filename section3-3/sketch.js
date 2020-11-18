// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  let size = width / 7;
  for(let i = 0; i < 7; i++){
    for(let j = 0; j < 7; j++){
      fill(25);
      rect(size*i, size*j, size, size);
      }
    }
  let x = 0;
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
    textSize(5);
    textFont("serif");
    text("d", dow*width+3, x*width+3);
    if(dow=6){
      x += 1;
    }
  }
}


function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1]
    return isLeapYear(y) ? 366 : 365;
}


function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  let b = dayOfYear(y,m,d);
  let c = Math.floor((y-2000)/4);
  let e = ((c+1)*2+(y-2001-c))%7; //
  let f = (c+e+5)%7;
  return f;

}

function dayOfWeekAsString(dow){
  const a = ["火", "水", "木", "金", "土", "日", "月", "火"];
  return a[dow];
}
