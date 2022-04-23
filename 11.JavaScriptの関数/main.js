let counter = 0;

function execount() {
  counter++;
  return counter;
}

function showexecount() {
  const timeElement = document.getElementById("time");
  timeElement.innerText = execount();
}

setInterval(showexecount, 1000);