var app = document.querySelector(".wrapper");

var state = {
  counter: 0,
};

var DECREASE_COUNTER = "DECREASE_COUNTER";
var RESET_COUNTER = "RESET_COUNTER";
var INCREASE_COUNTER = "INCREASE_COUNTER";

function getClassColor(counter) {
  if (counter < 0) {
    return "negative";
  } else if (counter > 0) {
    return "positive";
  } else {
    return "zero";
  }
}

function render() {
  return `
            <div id="counter" class="counter ${getClassColor(state.counter)}">${
    state.counter
  }</div>
            <div class="buttons">
                <button>-</button>
                <button>reset</button>
                <button>+</button>
            </div>`;
}

var store = {
  dispatch(action) {
    switch (action.type) {
      case INCREASE_COUNTER:
        state.counter++;
        break;
      case RESET_COUNTER:
        state.counter = 0;
        break;
      case DECREASE_COUNTER:
        state.counter--;
        break;
    }
    app.innerHTML = render();
    handleButtons();
  },
};

function handleButtons() {
  var buttons = document.querySelectorAll(".buttons button");

  var decreaseButton = buttons[0];
  var resetButton = buttons[1];
  var increaseButton = buttons[2];

  decreaseButton.addEventListener(
    "click",
    store.dispatch.bind(null, {
      type: DECREASE_COUNTER,
    })
  );
    resetButton.addEventListener(
      "dblclick",
      store.dispatch.bind(null, {
        type: RESET_COUNTER,
      })
    );
    increaseButton.addEventListener(
      "click",
      store.dispatch.bind(null, {
        type: INCREASE_COUNTER,
      })
    );
}

app.innerHTML = render();
handleButtons();
