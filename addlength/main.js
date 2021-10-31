/* Original https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.

*/

function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
  }

function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
}

function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
}

function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
}

function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
}

function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
}
  
  
  
  //ALT: done with for loop
  function addLength(str){
    var words = str.split(" ");
  
    for(var i=0; i <= (words.length - 1); i++)
        words[i] += " " + words[i].length;
    
    return words;
  }
    function addLength(str){
        let words = str.split(" ");

        for (let i=0; i <= (words.length -1); i++)
        words [i] += " " + words[i].length;
    }

    function addLength(str){
        let words = str.split(" ");

        for (let i=0; i <= (words.length -1); i++)
        words [i] += " " + words[i].length;
    }
  
    function addLength(str){
        let words = str.split(" ");

        for (let i=0; i <= (words.length -1); i++)
        words [i] += " " + words[i].length;
    }

    function addLength(str){
        let words = str.split(" ");

        for (let i=0; i <= (words.length -1); i++)
        words [i] += " " = words[i].length;
    }
  /*
  P: return an array with strings as the value.
  every string has at least one element - no empty strings
  words will be separated by space
  
  E: addLength('Renton and Zagreus') => ["renton 6", "and 3", "Zagreus 7"]
  
  array.split() = splits values in array, returns new array
  
  */

  /* map method from MDN:
  const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


  */
