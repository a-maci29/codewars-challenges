// // original: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
// Write a function that checks if a given string (case insensitive) is a palindrome.


function isPalindrome(x) {
  let reverse = (x.toLowerCase().split("").reverse().join(""))
  //splice
  //reverse
  //re-join
  //compare new string === original x
  //
   if (x.toLowerCase() === reverse) {
    return true
   } else {
     return false
   }
 }

 ///ALT:
 const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();

