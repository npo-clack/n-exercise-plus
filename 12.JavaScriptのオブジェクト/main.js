let counter = 0;

function showExeCount() {
  let timeElement = document.getElementById("keyboardinput");
  counter++;
  timeElement.innerText = counter;
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
