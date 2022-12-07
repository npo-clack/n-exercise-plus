let inputKeys = "";

// event引数をとるように変更する
// キーボード押した時とボタンクリック時のイベントがある
// KeyboardEvent: https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent
// MouseEvent: https://developer.mozilla.org/ja/docs/Web/API/MouseEvent
function showExeCount(event) {
  let inputKey;
  // event.key が存在した場合は、そのまま event.key を入力文字として扱う
  // event.key が存在するのは、実際のキーボードのキーが押された時。
  if (event.key) {
    inputKey = event.key;
  } else {
    // ボタンの場合はevent.targetに押されたボタンの要素が入っている。
    // ボタンの要素の innerText に各文字が入っている。
    inputKey = event.target.innerText;
  }

  // inputkeys という変数に押されたキーの文字を足していく。
  inputKeys = inputKeys + inputKey;

  // これまでに入力された文字列（inputkeys）を表示する。
  let timeElement = document.getElementById("keyboardinput");
  timeElement.innerText = inputKeys;
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
    // 'button'要素を作成する
    const childButton = document.createElement("button");
    childButton.innerText = letter;
    // 作成したボタンがクリックされたときに showExeCount関数が実行されるようにする
    childButton.onclick = showExeCount;
    // virtualkeyboard要素の子供として作成したボタン要素を追加する
    virtualKyboard.appendChild(childButton);
  }
}

showAlphabet();

const questionElement = document.getElementById("question");
questionElement.innerText = wordgame.question;