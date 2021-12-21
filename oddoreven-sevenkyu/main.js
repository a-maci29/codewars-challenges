/*Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero). */

// original: https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

  
    function oddOrEven(arr) {
        return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
      }

    function oddOrEven(arr) {
        return arr.reduce((a,b) => a+b, 0) % 2 ? 'odd' : 'even';
    }

    function oddOrEven(arr) {
        return arr.reduce((a, b) => a+b, 0) % 2 ? 'odd' : 'even';
    }

    function oddOrEven(arr) {
        return arr.reduce((a, b) => a+b, 0) % 2 ? 'odd' : 'even';
    }

    function oddOrEven(arr) {
        return arr.reduce((a, b) => a+b, 0) % 2 ? 'odd' : 'even';
    }

//ALT:

const oddOrEven = a => a.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';

const oddOrEven = a => a.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';

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

/* Q: how is it getting the a and  b variables? or how 0 is being made into a parameter and that works

So that's all going to be just in how .reduce() works. It takes two arguments (maybe more? Idk, you usually just see it with two) where the first is the callback function that I'll get to in a second, and the second is the initial value to pass into the callback function. So that's what the 0 is; it's the initial value being passed into the .reduce callback
The a and b variables are part of the callback. .reduce() wants a certain type of callback function basically, or a function that accepts certain parameters
The first parameter passed into the callback function is the ongoing reduce value, I'm not sure what it's called, but when the reduce starts, it'll be the 0 that's getting passed in, and after that, it'll be whatever value is returned. So that's the a variable
The second parameter passed into the reduce callback is the element from the array. So in this case, it'll be the next number of the array
So a is the ongoing sum, and b is the next number to add to the sum
Reduce callback functions can have two more parameters as well. I don't 100% remember the order they go in, but I think the third would be the index from the array (like what position in the original array the second parameter is from) and the fourth is the original array itself
In this case (and many cases where you'll use .reduce), you only need those first two parameters for what you're trying to do */