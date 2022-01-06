// https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
  return numbersArray.filter(e => (e % 2 == 0));
}

//condition whether or not a number in the array is even
//use filter to loop through array and check vs condition


//alt

function isEven(num){
    return num%2==0
  }
  
  function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    var filtered = numbersArray.filter(isEven);
    return filtered;
  }