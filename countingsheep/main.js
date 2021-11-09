/*Original: https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined */

function countSheeps(arrayOfSheep) {

  return (arrayOfSheep.filter( e => e === true).length)
  //'e' = element
  //running a function (=>) that if the value (of e)=== true
  //then return(.length) <--for the entire length of the array?
}
//^^^testing the type of value that each item in the array will be
//if true, then it will return

function countSHeeps(arrayOfSheep) {
  return (arrayOfSheep.filter(e => e === true).length)
}

function countSheeps(arrayOfSheep) {
  return (arrayOfSheep.filter(e => e === true).length)
}

function countSheeps(arrayOfSheep) {
  return (arrayOfSheep.filter(e => e === true).length)
}

function countSheeps(arrayOfSheep) {
  return (arrayOfSheep.filter(e => e === true).length)
}


//ALT:
function countSheeps(arrayOfSheep) {
  let count = 0;
  
  arrayOfSheep.forEach( function (sheep) {
    if (sheep)
      count++;
  });
  
  return count;
}

function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach(function(sheep) {
    if (sheep)
    count++
  });
  return count;
}

function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach(function(sheep) {
    if (sheep)
    count++
  });
  return count;
}

function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach(function(sheep) {
    if (sheep)
    count++
  });
  return count;
}

function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach(function(sheep) {
    if (sheep)
    count++
  });
  return count;
}

function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach(function(sheep) {
    if (sheep)
    count++
  });
  return count;
}