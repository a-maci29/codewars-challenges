// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
// In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    var string = num.toString(); //turns the number into a string
    var results = []; //empty array
    for (var i = 0; i < string.length; i++){ //for loop through the length of the number-turned-string
        results[i] = string[i] * string[i]; //how come this doesn't need to be pushed?
    }
    return Number(results.join(''));
};


//alt
function squareDigits(num){
  let result = num
    .toString()
    .split("")
    .map( num => parseInt(num) )
    .map( num => num * num )
    .join("")
   
  return parseInt(result)
}


//alt
function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join(''); //what exactly is the + operand doing here?
}