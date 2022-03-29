let counter = 0;

function execount() {
  counter++;
  return counter;
}

function showexecount() {
  const timeElement = document.getElementById("keyboardinput");
  timeElement.innerText = execount();

  // 書き方はいろいろ、isRedみたいなフラグを保持してもよい
  if (counter % 2 == 0) {
    timeElement.className = "red";
  } else {
    timeElement.className = "blue";
  }
}

// setInterval(showexecount, 1000);
document.onkeydown = showexecount;

const wordgame = {
  question: "りんごの英単語は？",
  correct: "apple",
  evaluation: function (answer) {
    return this.correct == answer;
  }
};

console.log(wordgame.evaluation("apple"));

function showalphabet() {
  const virtualKyboard = document.getElementById("virtualkeyboard");
  const aCharCode = 'A'.charCodeAt(0);
  for (let i = aCharCode; i < aCharCode + 26; i++) {
    const letter = String.fromCharCode(i);
    virtualKyboard.innerText += letter;
  }
}

showalphabet();