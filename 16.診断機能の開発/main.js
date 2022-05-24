let counter = 0;

function exeCount() {
  counter++;
  return counter;
}

function showExeCount() {
  const timeElement = document.getElementById("keyboardinput");
  timeElement.innerText = exeCount();

  // 書き方はいろいろ、isRedみたいなフラグを保持してもよい
  if (counter % 2 == 0) {
    timeElement.className = "red";
  } else {
    timeElement.className = "blue";
  }
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
  const aCharCode = 'A'.charCodeAt(0);
  for (let i = aCharCode; i < aCharCode + 26; i++) {
    const letter = String.fromCharCode(i);
    virtualKyboard.innerText += letter;
  }
}

showAlphabet();