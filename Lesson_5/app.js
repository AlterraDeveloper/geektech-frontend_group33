var counter = document.querySelector("#counter");

var buttons = document.querySelectorAll(".buttons button");

var decreaseButton = buttons[0];
var resetButton = buttons[1];
var increaseButton = buttons[2];

function decrease() {
  var counterValue = Number(counter.innerText) - 1;
  counter.innerText = counterValue;
  counter.style.color = getColor(counterValue);
}

var reset = function () {
  counter.innerText = 0;
  counter.style.color = getColor(0);
};

function increase() {
  var counterValue = Number(counter.innerText) + 1;
  counter.innerText = counterValue;
  counter.style.color = getColor(counterValue);
}

function getColor(counter) {
  if (counter < 0) {
    return "red";
  } else if (counter > 0) {
    return "green";
  } else {
    return "black";
  }
}

decreaseButton.addEventListener("click", decrease);
resetButton.addEventListener("dblclick", reset);
increaseButton.onclick = increase;

// counter.innerText = "TEST";

// counter.style.color = "green";
