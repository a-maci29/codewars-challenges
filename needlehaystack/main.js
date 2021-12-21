/* Original: https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5"
*/

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}


function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");

  function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }
}

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
//couldn't use the find() method?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

/* Why wouldn't the .find() method work?

indexOf is a native method on arrays. It's great for that one you linked. .find() or .findIndex() could also work, but they're meant for more robust things than .indexOf, I guess
Like my work example. If I just have an ID, I can't say array.indexOf(id) because the array has these data objects, like { id: 123, name: 'Joe', ... }. So I could do array.find(dataItem => dataItem.id === id) to retrieve the full data record from the array
Or if I just wanted to know the position of the full record in the array, array.findIndex(dataItem => dataItem.id === id)
But yeah, if your .findIndex() callback is just looking for the full item itself, like .findIndex(item => item === 'needle'), then you can just do .indexOf('needle') and that'll work, and if it's not in the array, it'll return an index of -1



*/