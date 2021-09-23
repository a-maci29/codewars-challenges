function filter_list(l) {
  // Return a new array with the strings filtered out
  const result = l.filter(function(item) {
    return typeof item === 'number';
  });
  // compare type to be a number 
    return result;
}

// original: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript