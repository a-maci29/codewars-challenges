// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x) {
    let numbers = x.map(e => Number(e))
    console.log(numbers)
    return numbers.reduce((acc, curr) => acc + curr)
}

//alt:
function sumMix(x) {
    let somme = 0;
    for (i = 0; i < x.length; i++) {
        somme += Number(x[i]);
    }
    return somme;
}

function sumMix(x) {
    let sum = 0;
    for(let i = 0; i < x.length; i++){
        sum =+ Number(x[i]);
    }
    return sum
}


//alt
function sumMix(x) {
    return x.map(x => parseInt(x)).reduce((x, y) => x + y);
}

//alt

function sumMix(x) {
    return x.reduce((a, v) => Number(a) + Number(v))
}