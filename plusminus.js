// https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.


function plusMinus(arr) {
    let positive = 0
    let negative = 0
    let zero = 0
    arr.forEach(el => {
        if (el > 0){
            positive ++
        }else if (el < 0){
                negative ++
        }else if (el === 0){
            zero ++
        }
    })
    let posFraction = (positive/arr.length).toFixed(6)
    let negFraction = (negative/arr.length).toFixed(6)
    let zeroFraction = (zero/arr.length).toFixed(6)
    console.log(posFraction)
    console.log(negFraction)
    console.log(zeroFraction)

}