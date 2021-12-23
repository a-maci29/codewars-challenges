// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


function squareSum(numbers){
    let total = 0;
      for(let i = 0; i < numbers.length; i++) {
        total += numbers[i] * numbers[i]; 
      }
    return total
    }
    //input: array of numbers
    //find the square of each number (number*number)
    //after all of them have been squared, add the sum together and return
    
    //loop through the array to square all of them
    //square the number by multiplying it by itself
    //reduce to find the sum? add to total

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

//alt: fancier way of doing it with the reduce method

function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}

function squareSum(numbers){
  var sum = 0;
  numbers.forEach(function(n) {
    sum += n * n
  });
  return sum;
}