// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


function isIsogram(str){
    //split the string, will turn into an array
      let characters = str.toLowerCase().split('')
     return characters.every((e, index) =>
    characters.indexOf(e) === index
   )
  }


//alt:  
function isIsogram(str) {
  str = str.toLowerCase()
  
  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i), i + 1) >= 0) {
      return false
    }
  }
  
  return true
}

//alt

function isIsogram(str){
  //Create array from string and make it uppercased
  var arr = str.split('').map(function(el) {
    return el.toUpperCase();
  }); 
  //Test each value for duplicates.
  return arr.every(function(el) {
    return arr.indexOf(el) == arr.lastIndexOf(el);
  });
}