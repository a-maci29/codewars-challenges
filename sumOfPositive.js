// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
  let total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      let += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
      }
  }
  return sum;
}

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum
}

//alt:
function positiveSum(arr) {
  let result = arr.filter(item => item >= 0).reduce((a,b) => a+b, 0); 
  return result;
}

//alt: same as ^^^ but parsed down further

function positiveSum (arr) {
    return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
  }