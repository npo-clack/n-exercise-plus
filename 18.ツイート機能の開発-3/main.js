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

  const resultEelement = document.getElementById("result");
  // result要素を何か入力された際には隠すために css を変更している。
  resultEelement.className = "result-hidden";

  //何も要素がないれば処理しない
  if (!inputKey) {
    return;
  }
  // enter, delete 以外の2文字以上の入力は使わない
  if (inputKey != "Enter" && inputKey != "Delete" && inputKey.length >= 2) {
    return;
  }
  // 数字も扱わない
  if (!Number.isNaN(Number(inputKey))) {
    return;
  }

  // Enterキーが押された または Enterボタンが押された
  if (inputKey == "Enter") {
    // 正誤判定
    const resultEelement = document.getElementById("result");
    resultEelement.className = "result";
    // wordgameオブジェクトのevaluation関数に入力してきた文字列を渡して、正誤判定を行なっている。
    if (wordgame.evaluation(inputKeys)) {
      resultEelement.innerText = "正解";
    } else {
      resultEelement.innerText = "不正解";
    }
    return;
  }

  // Deleteキーが押された または Deleteボタンが押された
  // macの日本語キーボードは fn+backspace
  if (inputKey == "Delete") {
    // (入力されてきた文字列の長さ-1)　の長さを取り出す = 最後の一文字を除いた文字列
    let deleteLast = inputKeys.substring(0, inputKeys.length - 1);
    inputKeys = deleteLast;
  } else {
    inputKeys += inputKey;
  }

  const timeElement = document.getElementById("keyboardinput");
  timeElement.innerText = inputKeys;
}

document.onkeydown = showExeCount;

const wordgame = {
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

  const enterButton = document.createElement("button");
  enterButton.innerText = "Enter";
  enterButton.onclick = showExeCount;
  virtualKyboard.appendChild(enterButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.onclick = showExeCount;
  virtualKyboard.appendChild(deleteButton);
}

showAlphabet();

const questionElement = document.getElementById("question");
questionElement.innerText = wordgame.question;
