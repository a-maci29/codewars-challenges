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

 // original: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript