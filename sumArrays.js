// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// // You can assume that you do get an array and if the array is empty, return 0.

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }

//alt:
function sum (array) {
    let res = 0;
    for (let i = 0; i < array.length; i++) {
      res = res + array[i];
    }
    return res;
    
  }
  console.log(sum(array));

//alt:
function sum (numbers) {
    "use strict";
    if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
      return 0;
    }
    
    return numbers.reduce((acc, num) => acc + num, 0);
};

function sum(numbers) {
    "use strict";
  //make sure there are no non-numbers in the array
  //if there are non-numbers, return 0
  if(numbers !== Number || numbers !== [] || numbers.length === 0){
     return 0;
     }else {
    return numbers.reduce((acc, cur) => (acc + cur, 0));
  }
  
  //if the array is made up of numbers, loop through the entire length of the array
  //add each value in the array
  //return total
    
    
};