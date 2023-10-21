// https://www.hackerrank.com/challenges/mini-max-sum/problem

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// [16 24]

function miniMaxSum(arr) {
  let sortedArr = arr.sort(function(a, b){return a-b})
  let small = sortedArr.slice(0, -1).reduce((acc, curr) => acc + curr)
  let large = sortedArr.slice(1).reduce((acc, curr) => acc + curr)
  console.log(small, large)

}