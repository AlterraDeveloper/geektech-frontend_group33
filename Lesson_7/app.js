// callbacks - функции обратного вызова

// function expression
const capitalize = function (string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
};

// function declararion
function getMbankName(surname, name) {
  // debugger;
  surname = capitalize(surname);
  name = capitalize(name);
  return `${name} ${surname[0]}.`; // Evgeniy K.
}

const getMbankName2 = (surname, name) => {
  surname = capitalize(surname);
  name = capitalize(name);
  return `${name} ${surname[0]}.`; // Evgeniy K.
};

const capitalize2 = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

console.log(getMbankName("kiselev", "eVGENIY"));

function calculator(num1, num2, operationCallback) {
  return operationCallback(num1, num2);
}

function sum(num1, num2) {
  return num1 + num2;
}

//anonymous functions - анонимные (безымянные) функции
console.log(calculator(5, 7, sum));

console.log(
  calculator(7, 5, function (num1, num2) {
    return num1 - num2;
  })
);

//arrow functions - стрелочные функции
console.log(calculator(5, 7, (num1, num2) => num1 * num2));
console.log(calculator(100, 25, (num1, num2) => num1 / num2));
console.log(calculator(1000, 25, (num1, num2) => (num1 / 100) * num2));
console.log(calculator(5, 3, (num1, num2) => num1 ** num2));

const clickHandler = (event) => {
  console.log(event);
  if (event.ctrlKey) {
    event.target.innerText = `Click ${++counter}`;
  } else if (event.shiftKey) {
    event.target.innerText = `Click ${--counter}`;
  }
};

const btn = document.querySelector("button");
let counter = 0;
btn.addEventListener("click", clickHandler);

// map filter reduce

const names = ["johny", "adam", "DAN", "claRIS", "seLEnA", "conStantin"];

console.log(names.map((name) => capitalize2(name)));

console.log(names.map((name) => name.toUpperCase()));

const menuItems = [
  "Главная",
  "ДЗ",
  "Расписание",
  "Табель",
  "Студенты",
  "Оплаты",
];

const menuContainer = document.querySelector(".menu");

menuContainer.innerHTML = menuItems
  .map((menuItem) => `<li>${menuItem}</li>`)
  .join("");

// filter

const numbers = [14, 2, 5, 1, 18, 85];

console.log(numbers.filter((num) => num % 2 === 0));
console.log(numbers.filter((num) => num > 50));

// reduce

console.log(numbers.reduce((sum, num) => (sum += num), 0));

console.log(
  names.reduce((longest, name) =>
    longest.length > name.length ? longest : name
  )
);

console.log(
  names.reduce((shortest, name) =>
    shortest.length < name.length ? shortest : name
  )
);

menuContainer.innerHTML = numbers.map(
  (num) => `<div class="circle">${num}</div>`
).join("");
