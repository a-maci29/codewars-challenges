// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string){
  let words = string.split(' ')
  let reversed = []
  for(let i = 0; i < words.length; i++){
    let value = words[i]
    if(value.length >= 5){
      value = value.split('').reverse().join('')
    }
    reversed.push(value)
  }
  return reversed.join(' ')
}

///ALT:

const spinWords = str => str.split(' ').map(word => word.length > 4 ? word.split('').reverse().join('') : word).join(' ');

///ALT:

function spinWords(str){
  return str.split(' ').map(item => (item.length >= 5) ? item.split('').reverse().join('') : item).join(' ');
}