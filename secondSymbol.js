// https://www.codewars.com/kata/63f96036b15a210058300ca9/train/javascript
// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

// Examples:

// secondSymbol('Hello world!!!','l')  --> 3
// secondSymbol('Hello world!!!', 'A') --> -1



function secondSymbol(s, symbol) {
  return s.indexOf(symbol, s.indexOf(symbol) + 1);
}

//alt:
function secondSymbol(s, symbol) {
  const firstIndex = s.indexOf(symbol);
  const secondIndex = s.indexOf(symbol, firstIndex + 1);
  
  if(secondIndex !== -1){
    return secondIndex;
  } else{
    return -1
  }
}


//alt:
function secondSymbol(string, symbol) {
  // your code
  const firstIndex = string.indexOf(symbol);  // find the first occurrence of the letter
  if (firstIndex === -1) {  // if the letter isn't in the string, return -1
    return -1;
  }
  const secondIndex = string.indexOf(symbol, firstIndex + 1);  // find the second occurrence of the letter
  if (secondIndex === -1) {  // if the letter only appears once in the string, return -1
    return -1;
  } else {
    return secondIndex;
  }
 
}

//ALT:

function secondSymbol(s, symbol) {
  const index = s.indexOf(symbol);
  return s.indexOf(symbol, index + 1)
}