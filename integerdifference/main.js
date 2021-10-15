/* Write a function that accepts two arguments: an array/list of integers and another integer (n).

Determine the number of times where two integers in the array have a difference of n.

https://www.codewars.com/kata/57741d8f10a0a66915000001/train/javascript

For example:

[1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
[1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3) */

const intDiff = (arr, n) => { //< variable intDiff = has array and n as parameters. '=>' denotes a function
    let count = 0; //<starting variable, starting at 0. is this redundant with the Math.abs?

    for(let i=0; i<arr.length; i++) { //i
        for(let j=i; j<arr.length-1; j++) {
            if(Math.abs(arr[i] - arr[j+1]) == n) count++;
        }
    }

    return count;
}

/*
let arr = [1, 2, ,3, 4, 5, 6]
let n = 2
const intDiff = (arr, n) => {
    let count = 0;

    for (let i = 0; i < arr.length - 1, i++) {
        let store = arr[i];
        for(let j = i + 1; j <arr.length; j++) {
            if(Math.Abs(arr[j] - store) === n) {
                count++
            }
        }
    }
      return count
    }
*/
//loop through all the elements in the array
//run an algorithm (int1 - int2){
//if difference = n, then return

//[1, 2, ,3, 4, 5, 6]
}

/*const intDiff = (arr, n) => {
    const = variable
    intDiff = arr[] - n

    */
/*
    const intDiff = (arr, n) => {
        let count = 0

        for(let i = 0; i < arr.length - 1; i++) {
            let store = arr[i];
            for(let j= i + 1 ; j < arr.length; j ++) {
                if(Math.abs(arr[j] - store) ===n ){
                    count++
                }
            }
        }

        return count
    }

    const intDiff = (arr, n, count=0) => {
        return arr.forEach( (a,i) => arr.slice(i+1).forEach( b => Math.abs(a-b)==n && count++ ) ), count
      } */