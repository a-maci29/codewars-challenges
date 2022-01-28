// https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript
// Complete the solution so that it reverses all of the words within the string passed in.

const reverseWords = (str) => str.split(" ").reverse().join(" ");

//alt
function reverseWords(str){
  return str.trim().split(' ').reverse().join(' ');
}
//alt
function reverseWords(str){
  var reverse = [];
  var words = str.split(" ");
  for(let i=words.length-1; i>=0; i--){
    reverse.push(words[i]);
    
  }
  return reverse.join(" ")
}