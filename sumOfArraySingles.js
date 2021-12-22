// codewars.com/kata/59f11118a5e129e591000134/train/javascript

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

function repeats(arr){
  return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0); //the 0 is the default value of a, which can really be made into any value, but can also pass any value you set to it
};

//.indexOf() is iterating through the array to find the element at that index
// .lastIndexOf is doing the same thing, but from the end of the array

//the above function is comparing the values of the index at which the element(in this case, integer/'v' is found)
// therefore, if the index values are the same, then it is only found in one spot in the so is unique