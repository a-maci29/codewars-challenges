// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.


function XO(str) {
  let ex = 0;
  let oh = 0;
  let arr = str.toLowerCase().split('').filter(e => (e === 'x' || e === 'o'))
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 'x'){
     ex += 1
    }else{
    oh += 1
    }
  }
  return ex == oh ? true : false
}

/////ALT

const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

////ALT

function XO(str) {
  var sum = 0;
  for(var i=0; i<str.length; i++){
    if(str[i].toLowerCase() == 'x') sum++;
    if(str[i].toLowerCase() == 'o') sum--;
  }
  return sum == 0;
}