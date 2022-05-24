let counter = 0;

function exeCount() {
  counter++;
  return counter;
}

function showExeCount() {
  let timeElement = document.getElementById("keyboardinput");
  timeElement.innerText = exeCount();
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
