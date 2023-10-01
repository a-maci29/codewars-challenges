// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/solutions/javascript
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  let wordsArray = s.split(' ')
  let sortWords = (wordsArray.sort((a, b) => a.length - b.length))
  return sortWords[0].length
}

//#2
function findShort(s){
  let toArr = (s.split(' ')).sort((a, b) => a.length - b.length)
  return toArr[0].length
}

//alt:
function findShort(s){
    return s.split(' ').sort((a,b) => a.length - b.length)[0].length;
  }

  //alt:
  function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }