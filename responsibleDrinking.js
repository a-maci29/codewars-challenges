// https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript
// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

// Examples
// "1 beer"  -->  "1 glass of water"
// because you drank one standard drink

// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
// because you drank ten standard drinks

function hydrate(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (parseInt(s[i]) > 0) {
      answer += +s[i];
    }
  }
  return answer > 1 ? `${answer} glasses of water`: '1 glass of water'
}

//alt
function hydrate(s) {
    let res = 0;
     for (let i in s) {
       if (s[i] > 0) {
         res += +s[i];
       }
     }
     return res > 1 ? res + ' glasses of water' : '1 glass of water';
   }

//alt
   function hydrate(s) {
    let amount = s.split('').filter(e => Number(e)).reduce((a,b) => Number(a) + Number(b));
    
    return `${amount} ${amount == 1 ? 'glass' : 'glasses'} of water`;
  }