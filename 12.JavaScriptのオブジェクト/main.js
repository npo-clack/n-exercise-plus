let counter = 0;

function exeCount() {
  counter++;
  return counter;
}

function showExeCount() {
  let timeElement = document.getElementById("keyboardinput");
  timeElement.innerText = exeCount();
}

// setInterval(showExeCount, 1000);
document.onkeydown = showExeCount;

let wordgame = {
  question: "りんごの英単語は？",
  correct: "apple",
  evaluation: function (answer) {
    return this.correct == answer;
  }
};

console.log(wordgame.evaluation("apple"));
