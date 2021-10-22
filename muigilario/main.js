//Original: https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript

/* Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.

Task
Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

Example
Input: 1,3,5,6,7,8

Output: 1,2,3,4,5,6,7,8 */

function pipeFix(numbers){
    let first = numbers[0]; //setting value of array's first value at 0
    let last = numbers[numbers.length-1]; //last number in the array -1 length
    
    let arr = []; //creating new array
    for(let i = first; i <= last; i++) { //for loop
      arr.push(i); //pushes this number to the end of the new array
    }
    return arr;
  }

  function pipeFix(numbers){
      let first = numbers[0];
      let last = numbers[numbers.length-1];

      let arr = [];
      for(let i = first; i<= last; i++) {
          arr.push(i);
          return arr;
      }
  }


  function pipeFix(numbers){
      let first = numbers[0];
      let last = numbers[numbers.length -1];

      let arr = [];
      for(let i = first; i <= last; i++) {
          arr.push(i);
        return arr;
      }
  
    function pipeFix(numbers){
        let first = numbers[0];
        let last = numbers[numbers.length -1];
        
        let arr = [];
        for(let i = first; i <= last; i++) {
            arr.push(i);
            return arr;
        }
    }

    function pipeFix(numbers){
        let first = numbers[0];
        let last = numbers[numbers.length-1];

        let arr = [];
        for(let i = first; i <= last; i++) {
            arr.push(i);
            return arr;
        }
    }
  }
  
//  ALT:


function pipeFix(numbers){
  var min = numbers[0];
  var max = numbers[numbers.length - 1];
  var array = [];
  
  for(var i = min; i<=max; i++)
  {
    array.push(i);
  }
  
  return array;
}