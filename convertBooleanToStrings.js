// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if (bool === true){
    return 'Yes'
    }else {
      return 'No'
    }
}

//alt
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}