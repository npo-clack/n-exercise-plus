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
