let counter = 0;

function showExeCount() {
  let timeElement = document.getElementById("time");
  counter++;
  timeElement.innerText = counter;
}

setInterval(showExeCount, 1000);