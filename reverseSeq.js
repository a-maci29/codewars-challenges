// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  let integers = [n]
  for(let i = 1; i <= n; i++){
    if(i < n){
      integers.push(i)
    }
  }
  console.log(integers)
  return integers.sort((a, b) => b - a);
};