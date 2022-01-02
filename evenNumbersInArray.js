// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript



// Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:


const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);

//filtering for the condition of item % 2 to check for even number
//slice `-number`


//alt
function evenNumbers(array, number) {
 let EvenNumbers= [];
 
 for(let i=0; i<=array.length; i++)
  {
      if(array[i] % 2 ==0)
        EvenNumbers.push(array[i]);
  }
 
   return EvenNumbers.splice(EvenNumbers.length-number,number);
   
}

//alt
function evenNumbers(array, number) {
      let arr = [];
      for (let i=array.length-1;number>0;i--){
        if (array[i] % 2 == 0) {
          arr.push(array[i]);
          number--;
        }
      }
  return arr.reverse();
}