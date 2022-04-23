let counter = 0;

function exeCount() {
  counter++;
  return counter;
}

function showExeCount(event) {
  const timeElement = document.getElementById("keyboardinput");
  timeElement.innerText = exeCount();;

  // 書き方はいろいろ、isRedみたいなフラグを保持してもよい
  if (counter % 2 == 0) {
    timeElement.className = "red";
  } else {
    timeElement.className = "blue";
  }
}

// setInterval(showExeCount, 1000);
document.onkeydown = showExeCount;

const wordgame = {
  question: "りんごの英単語は？",
  correct: "apple",
  evaluation: function (answer) {
    return this.correct == answer;
  }
};

console.log(wordgame.evaluation("apple"));

function showAlphabet() {
  const virtualKyboard = document.getElementById("virtualkeyboard");
  const aCharCode = 'a'.charCodeAt(0);
  for (let i = aCharCode; i < aCharCode + 26; i++) {
    const letter = String.fromCharCode(i);
    const childButton = document.createElement("button");
    childButton.innerText = letter;
    childButton.onclick = showExeCount;
    virtualKyboard.appendChild(childButton);
  }
}

showAlphabet();