function checkFive(x) {
  let result = 1
      if (x < 5){
      result = 0;
    }
  return result
}

function fakeBin(x){
  //turn the string into an array
  let binArray = x.split("");
  console.log(x, binArray)
//pass through each item in the array in a loop
  let result = binArray.map(checkFive)
  return result.join("")
  
}

/*function fakeBin(x){
  //turn the string into an array
  let newArr = []
  let binArray = x.split(" ");
//pass through each item in the array in a loop
   binArray.forEach(.split(' '));

  return newArr.push(result).join("")
  
  } 
//test whether or not it is above or below 5
//if it is greater than 5, replace with 1
//if it is smaller than 5, replace with 0
  } */
/*P: inputting a string of digits; will they be integers?
any other data type passed through? what if it is 5 exactly?
start and end with a string
R: return a string, comprised of all 0s and 1s
E: [710249] -> 100001
[63672484] -> 10110010
[63451] -> 10010
P:
*/