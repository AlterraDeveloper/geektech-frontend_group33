var cellsCount = 504;

var wrapper = document.querySelector(".wrapper");

// <div class="cell"></div>
function buildCell() {
  var div = document.createElement("div"); // <div></div>
  div.className = "cell";
  return div;
}

for (let i = 0; i < cellsCount; i++) {
  wrapper.appendChild(buildCell());
}

var cells = document.querySelectorAll(".cell");

function getRandomColor() {
  var colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

for (var cell of cells) {
  cell.addEventListener("mouseenter", function (event) {
    // console.log(event);
    event.target.style.backgroundColor = getRandomColor();
  });

  cell.addEventListener("mouseleave", function (event) {
    event.target.style.backgroundColor = "#555";
  });
}
