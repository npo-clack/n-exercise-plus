let counter = 0;

function execount() {
  counter++;
  return counter;
}

function showexecount() {
  const timeElement = document.getElementById("keyboardinput");
  timeElement.innerText = execount();
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
