let counter = 0;

function exeCount() {
  counter++;
  return counter;
}

function showExeCount() {
  let timeElement = document.getElementById("time");
  timeElement.innerText = exeCount();
}

setInterval(showExeCount, 1000);