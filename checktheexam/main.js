/* original: https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0 */

/*
P: taking in two arrays as parameters for checkExam function
    neither array is empty, and they are of the same length
R:     returning a number that is greater than 0
    if it is less than zero, return 0. In other words, greater to or equal than 0
E: [a, c, c, d], [a, b, c, d] -> 11
    [d, d, b, a], [d, a, c, b] -> 1
P: compare the values of both arrays
    compare their values at each index. loop.
    if they are matching, +4
    if they are not matching, -1
    return number >= 0
*/

function checkExam(array1, array2) {
    let points = 0;
    
    array2.map((x, y) => { //remember that map takes two parameters
      if (x === "") {
        points += 0;
      } else if (x === array1[y]) {
        points += 4;
      } else {
        points += -1;
      }
    })
    
    return points > 0 ? points : 0;
  }

  function checkExam(array1, array2) {
      let points = 0;

      array2.map((x, y) => {
          if (x === "") {
              points =+ 0;
          } else if (x === array1[y]) {
              points += 4;
          } else {
              points += -1;
          }
      });
      return points > 0 ? points : 0 ;
  }

  function checkExam(array1, array2) {
      let points = 0;

      array2.map((x, y) => {
          if (x === "") {
              points += 0;
          } else if (x === array1[y]) {
              points += 4;
          } else {
              points += -1;
          }
      })
      return points > 0 ? points : 0;
  }

  function checkExam(array1, array2) {
      let points = 0;

      array2.map((x, y) => {
          if (x === "") {
              points += 0;
          } else if (x === array1[y]) {
              points += 4;
          } else {
              points += -1;
          }
      })
      return points > 0 ? points : 0;
  }

  function checkExam(array1, array2) {
      let points = 0;

      array2.map((x, y) => {
          if (x === "") {
              points += 0;
          } else if (x === array1[y]) {
              points += 4;
          } else {
              points += -1;
          }
      });
      return points > 0 ? points : 0;
  }

  

  function checkExam(array1, array2) {
    let points = 0;
    
    array2.map((x, y) => {
      if (x === "") {
        points += 0;
      } else if (x === array1[y]) {
        points += 4;
      } else {
        points += -1;
      }
    })
    
    return points > 0 ? points : 0;
  }
  /* from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */