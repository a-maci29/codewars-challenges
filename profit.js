// https://www.codewars.com/kata/559590633066759614000063/train/javascript
// Task

// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples (Input --> Output)

// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

function minMax(arr){
  let profit = []
  profit.push(Math.min(...arr)), profit.push(Math.max(...arr))
  return (profit) 
}



//ALT
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}
//ALT
const minMax = arr => [ Math.min(...arr), Math.max(...arr) ];