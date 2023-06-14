// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

//     don't worry about uppercase vowels
//     y is not considered a vowel for this kata



function shortcut(string) {
var newArray = [];
    var b =  string.split('');
    
    for (var i = 0; i<b.length; i++) {
        
        if (b[i]!== "a" && b[i] !== "e" && b[i] !== "i" && b[i] !== "o" && b[i] !== "u") {
            newArray.push(b[i]);
        }
    }
    return newArray.join('');
}

//alt

function shortcut (string) {
  let array = ["a","e","i","o","u"];
  return string.split('').filter(x => !array.includes(x)).join('');
}

//alt:

function shortcut (string) {
  let al = [ 'a', 'e', 'i', 'o', 'u']
  return string.split('').map(letter => {
      if(!al.includes(letter) ){
          return letter
      }else{
          return ''
      }
  } ).join('')
}