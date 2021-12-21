// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    // Return a new array with the strings filtered out
    const result = l.filter(function(item) {
      return typeof item === 'number';
    });
    // compare type to be a number 
      return result;
  }
  
  //filter is looking for the typeof = number
  //running an array through the filter
  //l is our parameter
  
  //ex list [4, 6, 8, 'y' 'b'] = [4, 6, 8]
  
  
  /*const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  
  const result = words.filter(word => word.length > 6);
  
  console.log(result);
  // expected output: Array ["exuberant", "destruction", "present"]*/

  ////////Alt:

  function filter_list(l) {
    return l.filter(e => Number.isInteger(e));
  }

  function filter_list(l) {
      return l.filter(e => Number.isInteger(e));
  }

  function filter_list(l) {
      return l.filter(e => Number.isInteger(e));
  }

  function filter_list(l) {
      return l.filter(e => Number.isInteger(e));
  }

  function filter_list(l) {
      return l.filter(e => Number.isInteger(e));
  }

  function filter_list(l) {
      return l.filter(e => Number.isInteger(e));
  }

  function filter_list(l) {
      return l.filter(e => Number.isInteger(e));
  }

  /////Alt:
  function filter_list(l) {
    return l.filter((el) => typeof(el) == 'number')
  }

  function filter_list(l) {
      return l.filter((el) => typeof(el) == Number) //why doesn't this work?
  }

  function filter_list(l) {
      return l.filter((el) => typeof(el) == 'number')
  }

  function filter_list(l) {
      return l.filter((el) => typeof(el) == 'number')
  }

  function filter_list(l) {
      return l.filter((el) => typeof(el) == 'number')
  }