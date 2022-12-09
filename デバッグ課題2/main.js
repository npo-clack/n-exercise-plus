let counter = 0;

function showExeCount() {
  let keyboard = document.getElementById("keyboard");
  counter++;
  keyboard.innerText = counter;
}

let button = document.getElementById("button");
button.onclick = showExeCount();