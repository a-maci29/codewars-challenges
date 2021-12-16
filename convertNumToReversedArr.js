// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
    return n.toString().split('').reverse().map(Number);
}

function digitize(n) {
    return n.toString().split('').reverse().map(Number);
}
function digitize(n) {
    return n.toString().split('').reverse().map(Number);
}

//Alt:
digitize = n => n.toString().split('').reverse().map(Number)


//input: random number
//convert number into an array. has to be made into a string before it can be split
//return an array of single-digit numbers
//output: number as an array, but reversed
//numbers have to be put into an array
