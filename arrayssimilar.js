// https://www.codewars.com/kata/51e704f2d8dbace389000279/train/javascript
// Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

//SOLUTION:
function arraysSimilar(arr1, arr2) {
  let sorted1 = (arr1.sort((a, b) => a - b, 0).reduce((acc, curr) => acc + curr, 0))
  let sorted2 = (arr2.sort((a, b) => a - b, 0)).reduce((acc, curr) => acc + curr, 0)
  console.log(sorted1, sorted2)
  if(sorted1 === sorted2 || typeof sorted1 === sorted2){
    return true
  }else{
    return false
  }
}

//ALT

function arraysSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  arr1.sort();
  arr2.sort();
  return arr1.every((el, i) => el === arr2[i]);
}

//ALT:

const arraysSimilar = (arr1, arr2) => arr1.sort().length == arr2.sort().length && arr1.every((el, i) => el === arr2[i]);

//ALT:
function arraysSimilar(arr1, arr2) {
  return JSON.stringify(arr1.slice().sort()) === JSON.stringify(arr2.slice().sort());
}