// refactoring

function maskCard(cardNumber) {
    var maskedCardNumber = "";
    for (var i = 0; i < cardNumber.length; i++) {
      maskedCardNumber += (i >= 6 && i <= 11) ? "*" : cardNumber[i];
      // if(i >= 6 && i <= 11){
      //     maskedCardNumber += "*";
      // }else{
      //     maskedCardNumber += cardNumber[i];
      // }
    }
    return maskedCardNumber;
  }
  
  // ES6
  function maskCard2(cardNumber, mask = "*"){
  
      // mask = mask || "*"; //ES5
  
      var firstPart = cardNumber.substring(0, 6);
      var hiddenPart = cardNumber.slice(6, -4);
      var lastPart = cardNumber.slice(-4);
  
      // return firstPart + hiddenPart.replace(/\d/g, mask) + lastPart;
      return firstPart + mask.repeat(hiddenPart.length) + lastPart;
  }
  
  
  
  console.log(maskCard("1564451815617165"));
  console.log(maskCard2("1564451815617165", "X"));
  console.log(maskCard2("1564451815617165", "-"));
  console.log(maskCard2("1564451815617165", "_"));
  console.log(maskCard2("1564451815617165"));
  