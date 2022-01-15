// https://www.codewars.com/kata/57fafd0ed80daac48800019f/train/javascript

// Move all exclamation marks to the end of the sentence

Examples
remove("Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!!"
remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"


function remove(s) {
  return s.replace(/!/g, '') + s.replace(/[^!]/g, '');
}

//Alt
remove=s=>s.split('').filter(x=>x!='!').concat(s.split('').filter(x=>x=='!')).join('')