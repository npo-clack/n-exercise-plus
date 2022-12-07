let counter = 0;

function showExeCount() {
  let timeElement = document.getElementById("keyboardinput");
  counter++;
  timeElement.innerText = counter;

  // counterが2で割り切れるかどうかで、偶数か奇数かを判定する。
  if (counter % 2 == 0) {
    timeElement.className = "red";
  } else {
    timeElement.className = "blue";
  }
}

document.onkeydown = showExeCount;

let wordgame = {
  question: "りんごの英単語は？",
  correct: "apple",
  evaluation: function (answer) {
    return wordgame.correct == answer;
  }
};

console.log(wordgame.evaluation("apple"));

function showAlphabet() {
  const virtualKyboard = document.getElementById("virtualkeyboard");
  // a の文字コード（数字）を調べて、文字コードとしてのアルファベットの開始位置を調べる。
  const aCharCode = 'a'.charCodeAt(0);
  // a の文字コードから zの文字コードまでをfor分で繰り返す。
  for (let i = aCharCode; i < aCharCode + 26; i++) {
    // ここでの i はアルファベットの文字コードなので、その文字コードから実際の文字に戻す
    const letter = String.fromCharCode(i);
    virtualKyboard.innerText += letter;
  }
}

showAlphabet();