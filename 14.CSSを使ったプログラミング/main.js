let counter = 0;

function showExeCount() {
  let timeElement = document.getElementById("keyboardinput");
  counter++;
  timeElement.innerText = counter;

  // counterが2で割り切れるかどうかで、偶数か奇数かを判定する。
  if (counter % 2 == 0) {
    timeElement.className = "red";
  } else {
    timeElement.className = "blue";
  }
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
