/*Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero). */

// original: https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

  
    function oddOrEven(arr) {
        return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
      }

//ALT:

const oddOrEven = a => a.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';
    //array of integers
    //separate each element
    //add all together
    //if the sum % 2 === 0, return "even", else return "odd"
    
    //loop for addition?


/* From MDN on reduce
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10
*/