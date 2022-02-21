// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

//alt:
function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

//alt:
GetSum = (a, b) => (a + b) * (Math.abs(a - b) + 1) / 2;