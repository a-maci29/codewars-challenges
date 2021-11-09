/* original: https://www.codewars.com/kata/5f6d533e1475f30001e47514/train/javascript

[You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.]


Given an array with unique integers, (arr) (a) (b)
find out whether a or b appear in the array consecutively

use a boolean to determine true/false if they are consecutive

P: input into a function is going to be an array
    they could be negative, but they will always be whole numbers
    no other data types will be passed as an argument
R: a boolean value true/false
E: arr = [3, 7, 2, 5, 6] a = 7, b = 6
return as false

    arr = [11, 15, 3, 100] a = 15, b = 3
    return as true: index for a [1], index for b [2]

    arr = [11, 6, 88, 4, 56, 56] a = 56, b = 6
    return false
P: //loop through the array

    //set a conditional

    //if we want to think about a and b's placement in the array, then we will want to read their indices and if they appear one after the other

    //no matter what order a and/or b appear in, the difference between their inices will always be 1

    //if the difference between a and b's indices in the array is greater than 1, return false

    //and if the difference between a and b's indices in the array is 1 exactly, return true

    //.indexOf()

    //index of a - index of b -> indexOfA, indexOfB

*/

const consecutive = (array, a, b) => {
    let indexOfA = array.indexOf(a);
    let indexOfB = array.indexOf(b);
        if((indexOfA - indexOfB) === 1 || (indexOfA - indexOfB) === -1){
            return true;
            } else {
        } return false;
 }

const consecutive = (array, a, b) => {
    let indexOfA = array.indexOf(a);
    let indexOfB = array.indexOf(b);
    if((indexOfA - indexOfB) === 1 || (indexOfA - indexOfB) === -1){
        return true;
    } else {
        return false;
    }
 }

 const consecutive = (array, a, b) => {
     let indexOfA = array.indexOf(a);
     let indexOfB = array.indexOf(b);
        if((indexOfA - indexOfB) === 1 || (indexOfA - indexOfB) === -1){
        return true;
        } else {
            return false;
        }
 }

 const consecutive = (array, a, b) => {
     let indexOfA = array.indexOf(a);
     let indexOfB = array.indexOf(b);
     if((indexOfA - indexOfB) === 1 || (indexOfA - indexOfB) === -1){
         return true;
     } else {
         return false;
     }
 }

 const consecutive = (array, a, b) => {
     let indexOfA = array.indexOf(a);
     let indexOfB = array.indexOf(b);
     if((indexOfA - indexOfB) === 1 || (indexOfA - indexOfB) === -1){
         return true;
     } else {
         return false;
     }
 }

 //ALT:

 function consecutive(arr, a, b) {
    return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
  }

  function consecutive(arr, a, b) {
      return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
  }

  function consecutive(arr, a, b) {
      return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
  }

  function consecutive(arr, a, b) {
      return Math.abs(arr.indexOf(a) - indexOf(b)) == 1;
  }

  function consecutive(arr, a, b) {
      return Math.abs(arr.indexOf(a) - indexOf(b)) == 1;
  }

  function consecutive(arr, a, b) {
      return Math.abs(arr.indexOf(a) - indexOf(b)) == 1;
  }
  
  function consecutive(arr, a, b) {
      return Math.abs(arr.indexOf(a) - indexOf(b)) == 1;
  }