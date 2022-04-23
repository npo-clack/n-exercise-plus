const wordgame = {
  question: "りんごの英単語は？",
  correct: "apple",
  evaluation: function (answer) {
    return this.correct == answer;
  }
};

const questionElement = document.getElementById("question");
questionElement.innerText = wordgame.question;

let inputKeys = "";

function showexecount(event) {
  let inputKey;
  if (event.key) {
    inputKey = event.key;
  } else {
    inputKey = event.target.innerText;
  }

  const resultEelement = document.getElementById("result");
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

  if (inputKey == "Enter") {
    // 正誤判定
    const resultEelement = document.getElementById("result");
    resultEelement.className = "result";
    if (wordgame.evaluation(inputKeys)) {
      resultEelement.innerText = "正解";
    } else {
      resultEelement.innerText = "不正解";
    }
    return;
  }

  if (inputKey == "Delete") {
    let deleteLast = inputKeys.substring(0, inputKeys.length - 1);
    inputKeys = deleteLast;
  } else {
    inputKeys += inputKey;
  }

  const timeElement = document.getElementById("keyboardinput");
  timeElement.innerText = inputKeys;
}

// setInterval(showexecount, 1000);
document.onkeydown = showexecount;

function showalphabet() {
  const virtualKyboard = document.getElementById("virtualkeyboard");
  const aCharCode = 'a'.charCodeAt(0);
  for (let i = aCharCode; i < aCharCode + 26; i++) {
    const letter = String.fromCharCode(i);
    const childButton = document.createElement("button");
    childButton.innerText = letter;
    childButton.onclick = showexecount;
    virtualKyboard.appendChild(childButton);
  }

  const enterButton = document.createElement("button");
  enterButton.innerText = "Enter";
  enterButton.onclick = showexecount;
  virtualKyboard.appendChild(enterButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.onclick = showexecount;
  virtualKyboard.appendChild(deleteButton);
}

showalphabet();