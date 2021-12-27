// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = 0
  //search through array - loop
  for(let i = 0; i < str.length; i++){
  //identify vowels
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
    vowelsCount += 1
  }
  
  //add to count
  return vowelsCount
}

//input one string
//identify and count the number of vowels a, e, i, o, u
//add to a count and return final number of vowels

//ALT: Regex

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

  //ALT:

  function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }


//ALT:

function getCount(str) {
    let vowels = ['a','e','i','o','u'];
    return str.split('').filter(letter => {
      return vowels.includes(letter)? true : false;
    }).length;
  }