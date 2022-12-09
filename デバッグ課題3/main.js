let counter = 0;

function showExeCount() {
  counter++;
  document.write(counter);
}

let button = document.getElementById("button");
button.onclick = showExeCount;