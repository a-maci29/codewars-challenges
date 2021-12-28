// https://www.codewars.com/kata/51675d17e0c1bed195000001/train/javascript
// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

// Adapted from ProjectEuler.net

function solution(digits){
  let answer = 0;
  
  for (let i=0; i<digits.length; i++){
    let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
    if(Number(number) > answer){       //convert to number and compare against answer
      answer = Number(number);
    }
  }
  return answer;
}

//alt:

function solution(digits){
    let s = [];
    for (var i = 0; i < digits.length - 4; i++){
        s.push(digits.substr(i,5));
    };
    return Math.max(...s);
}

//alt:

function solution(digits){
    let arr = [];
    for (let i = 0; i < digits.length; i++) {
      if(digits.slice(i, i + 5).length === 5) {
        arr.push(digits.slice(i, i + 5));
      }
    }
    return Math.max(...arr);
  }


  //ignore this garbage

  function solution(digits){
    //loop through the array
    for(let i = 0; i < digits.length; i++){
      //slice i and the index + 4; //slice returns new array
      let iAndFive = digits.slice(i, 5);
      //sort
      iAndFive.sort((a, b) => a-b).parseInt()
    }
    return iAndFive.pop()
  }
  
  //original input is one string of numbers
  //return a sequence of 5 digits that represents the largest number
  //loop through the array, and for each number, take the 5 digits after it
  //^ slice?
  //convert into numbers?
  //push this into an array and sort by number value ***careful with numbers + sort
  //return the last one in the array