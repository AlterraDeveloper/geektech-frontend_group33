var wrapper = document.querySelector(".wrapper");
var textInput = document.querySelector("#textInput");
var limits = document.getElementById("limit");

var limit = 10;

var buildLimitString = function (value) {
  return `${value} / ${limit}`;
};

function textInputHandler() {
  var textInputLength = textInput.value.length;
  limits.innerText = buildLimitString(textInputLength);
    textInput.value = textInput.value.substring(0, limit - 1);
    
    //   textInput.setAttribute("maxlength", limit);


//   var color = textInputLength > limit ? "red" : "purple";

//   wrapper.style.color = color;
//   textInput.style.borderColor = color;
//   textInput.style.color = color;
}

textInput.addEventListener("input", textInputHandler);
