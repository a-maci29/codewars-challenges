/*https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */

function abbrevName(name){
  //iterate through each of the two items in the array
  // isolate the first letter of each

  let nameArray = name.split(" "); //reassigning name into the variable `nameArray`, split with " ". str.split returns a new array with the substring
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase(); //nameArray[0][0] and nameArray[1][0] is referring to the elements in name array
}
  //make sure they are uppercase letters
  //return to new array
  //concatenate with a 'first letter' + '.' + 'first letter'

  function abbrevName(name){
  let nameArray = name.split(" ");
  return (nameArray[0][0] + '.' + nameArray[1][0]).toUpperCase()
  }

  function abbrevName(name){
  let nameArray = name.split(' ');
  return (nameArray[0][0] + '.' + nameArray[1][0]).toUpperCase()
  }

  function abbrevName(name){
      let nameArray = name.split(' ');
      return (nameArray[0][0] + '.' + nameArray[1][0]).toUpperCase()
  }

  function abbrevName(name){
      let nameArray = name.split(' ');
      return (nameArray[0][0] + '.' + nameArray[1][0]).toUpperCase()
  }

  function abbrevName(name){
      let nameArray = name.split(' ');
      return (nameArray[0][0] + '.' + nameArray[1][0]).toUpperCase()
  }

    function abbrevName(name){
        let nameArray = name.split(' ');
        return (nameArray[0][0] + '.' + nameArray[1][0]).toUpperCase()
    }
/*
P: two words will be in the array
    they will always be strings? any other data types?
    will there always only be two words/names? could there be more?
    special characters?
R: the first letters of each name, aka the 0 index of each element in the array
    there must be a '.' between them
E: Sam Harris => S.H
patrick feeney => P.F
P: iterate through each of the two items in the array
  isolate the first letter of each
  make sure they are uppercase letters
  return to new array
  concatenate with a 'first letter' + '.' + 'first letter'
*/