<!-- https://www.codewars.com/kata/58870402c81516bbdb000088/train/javascript
//  How many strings equal to A can be constructed using letters from the string B? Each letter can be used only once and in one string only.
// Example

// For A = "abc" and B = "abccba", the output should be 2.

// We can construct 2 strings A with letters from B.
// Input/Output

//     [input] string A

//     String to construct, A contains only lowercase English letters.

//     Constraints: 3 ≤ A.length ≤ 9.

//     [input] string B

//     String containing needed letters, B contains only lowercase English letters.

//     Constraints: 3 ≤ B.length ≤ 50.

//     [output] an integer -->


function stringsConstruction(A, B) {
//letters in string B should only be used once
  //can only return the entire string from A as an output to be counted
//    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  
  //counter method to iterate through string b
  
  let bcount = {}
  let acount = {}
  let answer = 0
  //loop through B
  for(let i = 0; i < B.length; i++){
    if(bcount[B[i]]){
      bcount[B[i]] += 1
    }else{
      bcount[B[i]] = 1
    }
  }
  //loop through A and count
    for(let i = 0; i < A.length; i++){
    if(acount[A[i]]){
      acount[A[i]] += 1
    }else{
      acount[A[i]] = 1
    }
  }
    //check if correct values are in B before continuing loop
  for(let i = 0; i < Object.keys(acount).length; i++){
    let currLetter = Object.keys(acount)[i]
    if(!Object.keys(bcount).includes(currLetter)){
      console.log('no letter found 404')
      return 0
    }
  }
  let arr = []
  for(let key in acount){
    arr.push(Math.floor(bcount[key] / acount[key]))
  }
  return Math.min(...arr)
  return answer
}