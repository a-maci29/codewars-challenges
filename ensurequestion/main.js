/* Original: https://www.codewars.com/kata/5866fc43395d9138a7000006/train/javascript

Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?" 
"No?" --> "No?"
*/



const ensureQuestion = s => s.endsWith('?') ? s : s+'?' 
//variable ensureQuestion = arrow function s => s.endsWith, followed by ternary operator checking for true/false

const ensureQuestion = s => s.endsWith('?') ? s : s + '?' //concatinating 

const ensureQuestion = s => s.endsWith('?') ? s : s + '?'

const ensureQuestion = s => s.endsWith('?') ? s : s + '?'

const ensureQuestion = s => s.endsWith('?') ? s : s + '?'

const ensureQuestion = s => s.endsWith('?') ? s : s + '?'

const ensureQuestion = s => s.endsWith('?') ? s : s + '?'

const ensureQuestion = s => s.endsWuth('?') ? s : s + '?'


//ALT:
function ensureQuestion(s) {
    return s.split('?').join('').concat('?')
  }

//ALT:

let ensureQuestion = (s) => s.includes("?") ? `${s}` : `${s}?`;

let ensureQuestion = (s) => s.includes("?") ? `${s}` : `${s}`;

/*
'endsWith' - returns true/false for a string.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith */