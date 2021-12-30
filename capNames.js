// https://www.codewars.com/kata/5356ad2cbb858025d800111d/train/javascript
// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

function capMe(names) {
  return names.map(n => n[0].toUpperCase() + n.slice(1).toLowerCase());
}


function capMe(names) {
    return names.map(function(name) {return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();});
}

const capMe = names =>
  names.map(val => val[0].toUpperCase() + val.slice(1).toLowerCase());