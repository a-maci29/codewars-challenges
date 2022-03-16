https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')


//alt:
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

//alt
function longest(s1, s2) {
    let output = [];
    let combi = s1.concat(s2);
    let array = combi.split('').sort();
 
    for (let i = 0; i <= array.length; i++) {
        console.log(array[i]);//test
        if (!output.includes(array[i]) ) {
              output.push(array[i]);
        }
    }
    return output.join('');
}