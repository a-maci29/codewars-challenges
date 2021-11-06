/* Original: https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] */


function maps(x){
    /*P: Loop through the array with a for loop
    take each value, and double
    returning new value to a new array*/
      let newArr = [] //create new array to push returned values into
      for(let i = 0; i < x.length; i++) { //for loop: variable, iteration/condition, incrementing initial variable
        let doubleValue = (x[i] * 2); //calculation to store in new array, which is named `doubleValue`. Passing (x) through each iteration(i), and multiply by 2.
        newArr.push(doubleValue); //push the resulting new value in `doubleValue` to `newArr.
      }
      return newArr
    }

    function maps(x){
      let newArr = []
      for(let i=0; i < x.length; i++){
        let doubleValue = (x[i]*2);
        newArr.push(doubleValue);
      }
      return newArr
    }
    

    function maps(x){
      let newArr = []
      for(let i = 0; i< x.length; i++) {
        let doubleValue = (x[i] * 2);
        newArr.push(doubleValue);
      }
      return newArr
    }

    
    /*
    P: x will be passed through as an array of integers.
    Will there ever be an empty array?
    Will there ever be any other data types within the array?
    Any negative numbers? Any non-whole numbers?
    Will there be any duplicates, and how should they be handled?
    R: Returning a new array of integers.
    Take each value, and double before returning.
    E:
    [7, 8, 9] -> [14, 16, 18]
    [20, 30, 40] -> [40, 60, 80]
    [100, 200, 300] -> [200, 400, 600]
    P: Loop through the array with a for loop
    take each value, and double
    returning new value to a new array
    */


    //AlT:
    
function maps(x){ //function 'maps', passing `x` as the parameter
  return x.map(n => n * 2); //[argument].map[function n > n *2)] & return
}

function maps(x){
  return x.map(n => n * 2);
}

function maps(x){
  return x.map(n => n * 2);
}

function maps(x) {
  return x.map(n => n *2);
}

function maps(x){
  return x.map(n => n * 2);
}

function maps(x){
  return x.map(n => n * 2);
}

function maps(x){
  return x.map(n => n *2);
}