/* original: codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
None of the arrays will be empty, so you don't have to worry about that! */

function removeEveryOther(arr){
    let newArr=[];
  for (let i = 0; i < arr.length; i+=2){
    newArr.push(arr[i]);
    }
  return newArr;
  }


function removeEveryOther(arr) {
    let newArr=[]
    for (let i=0; i< arr.length; i+=2){
        newArr.push(arr[i]);
    }
    return newArr;
}

function removeEveryOther(arr) {
    let newArr = []
    for (let i=0; i < arr.length; i+=2){
        newArr.push(arr[i]);
    }
    return newArr;
}

function removeEveryOther(arr) {
    let newArr = []
    for (let i=0; i < arr.length; i+=2){
        newArr.push(arr[i]);
    }
    return newArr;
}

function removeEveryOther(arr) {
    let newArr = []
    for (let i=0; i<arr.length; i+=2){
        newArr.push(arr[i]);
    }
    return newArr;
}

function removeEveryOther(arr) {
    for (let i=0; i < arr.length; i+=2) {
        newArr.push(arr[i]);
    }
    return newArr;
}


//ALT:

function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }

  function removeEveryOther(arr){
      return arr.filter(function(elem, index) {
          return index % 2 === 0;
      })
  }


  //ALT:

  function removeEveryOther(arr){
    //your code here
    return arr.filter((_, idx) => idx % 2 === 0); //<--Want to know why this works. What is the _?
  }