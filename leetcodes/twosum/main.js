/* Original: https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++){
      for (let j = 1; j < nums.length; j++){
          if (i !== j){
         if (nums[i] + nums[j] === target) {
             return [i, j]
         }
        } 
      }
  }
};


//nums = array

//target = integer

//taking two values from the array, no more and no less, to reach the target

//a value can only be used once

//order does not matter

//returning the index of the two numbers that add up to target

/*example
nums = [3, 6, 10, 9], target = 19
output = [2, 3]

//loop through values in array

//check for if the two values == target

//value 1 + value 2 === target

//return the indices as an array: ex: [0, 3]

*/