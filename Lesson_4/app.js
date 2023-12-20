// Loops - циклы

// for..of
// for
// for..in
// while
// do..while

var cashierBag = {
  amount: 22_000,
  noteStructure: {
    100: 10,
    200: 15,
    500: 10,
    1000: 4,
    5000: 2,
  },
};

// cashier audit - кассовый аудит
var amountInBag = 0;

for (var noteKey in cashierBag.noteStructure) {
  amountInBag += noteKey * cashierBag.noteStructure[noteKey];
}

if (amountInBag === cashierBag.amount) {
  console.log("AUDIT SUCCESS");
} else {
  console.log("AUDIT ERROR. Details:", amountInBag - cashierBag.amount);
}

console.log(
  amountInBag === cashierBag.amount
    ? "AUDIT SUCCESS"
    : "AUDIT ERROR. Details: " + (amountInBag - cashierBag.amount)
);

// унарные
// бинарные
// тернарный: условие ? результат1 : результат2

var inn = "00101200100001";

var firstCharInn = inn[0];

// console.log(firstCharInn === "2" ? "male" : "female");
console.log(firstCharInn === "0" ? "legal" : "private");

var registrationData = {
  surname: "Kiselev",
  name: "Eugene",
  email: "test@test.com",
  password: "123456",
  repeatPassword: "123456",
  phone: "null",
  age: "undefined",
};

// truthy falsy - правдоподобные и ложноподобные

// Falsy: false, 0, NaN, "", null, undefined = false

// validation - валидация
var emptyFields = [];
for (var field in registrationData) {
  if (!registrationData[field]) {
    emptyFields.push(field);
  }
}

console.log(
  emptyFields.length
    ? `VALIDATION ERROR. Requires: ${emptyFields.join()}`
    : "VALIDATION SUCCESS"
);

// Functions

// function declaration - определение функции

function sayHello() {
  console.log("Hello function declaration");
}

// function expression - функциональное выражение

var _sayHello = function () {
  console.log("Hello function expression");
};

sayHello();
_sayHello();

function checkHomework(name, hwNo) {
  console.log("I check " + name + "'s homework #" + hwNo);
}

checkHomework("Artem", 2);
checkHomework("Ayganish", 6);

var getMbankReceiver = function (surname, name) {
  // return name + " " +  surname[0] + ".";
  return surname + " " + name[0] + ".";
};

console.log(getMbankReceiver("Kiselev", "Evgeniy"));
console.log(getMbankReceiver("Smirnov", "Petr"));
console.log(getMbankReceiver("Abasova", "Datkaiym"));

function getGazpromPoints(cardType, litres) {
  // ...
  return 0;
}

function getGlobusPoints(amount) {
  if (amount < 800) return 0;

  var points = Math.floor(amount / 100);

  if (amount >= 800 && amount < 2000) {
    return points;
  } else if (amount >= 2000 && amount < 5000) {
    return points * 2;
  } else {
    return points * 3;
  }
}

console.log(getGlobusPoints(550)); // 0
console.log(getGlobusPoints(1999)); // 19
console.log(getGlobusPoints(2800)); // 56
console.log(getGlobusPoints(18573)); // 555

// 150.73 -> 150 сом 73 тыйын

function getIntegerCurrencyName(currency) {
  switch (currency) {
    case "USD":
      return "dollars";
    case "RUB":
      return "rubles";
    case "KGS":
      return "soms";
    case "EUR":
      return "euros";
    default:
      return "?????";
  }
}

var getFloatCurrencyName = function(currency){
    switch (currency) {
        case "USD":
          return "cents";
        case "RUB":
          return "kopeiki";
        case "KGS":
          return "tyiyn";
        case "EUR":
          return "eurocents";
        default:
          return "?????";
      }
}

function getWritablePrice(price, currency) {
  var integerPart = Math.trunc(price);
  var floatPart = Math.round((price % 1) * 100);

  return `${integerPart} ${getIntegerCurrencyName(currency)} ${floatPart} ${getFloatCurrencyName(currency)}`;
}

console.log(getWritablePrice(150.73, "KGS"));
console.log(getWritablePrice(1000, "USD"));
console.log(getWritablePrice(0.5, "EUR"));
console.log(getWritablePrice(3.568, "RUB"));
console.log(getWritablePrice(45.78, "CNY"));
