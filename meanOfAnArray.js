// Original: https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


function getAverage(marks){
 let totalMarks = marks.reduce((acc, cur) => (acc + cur))
   
  let findAverage = (totalMarks / marks.length)
  return Math.floor(findAverage)
}

//inputting an array of numbers
//assuming that everything will be a number in the array
//array will never be empty
//add all the numbers together
//divide by how many "students" numbers there are
//round down to the nearest number
//returning the average

//Alt
function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) = sum + x) / marks.length);
}

function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) = sum + x) / marks.length)
}

function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) = sum + x) / marks.length)
}

function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) = sum + x) / marks.length)
}