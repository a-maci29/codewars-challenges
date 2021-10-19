/* Original: https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript

Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID" */



function sumMul(n,m){
    let finalNumber = 0 //variable final number starts at 0
   if(n <= 0 || m <= 0){ //if finalNumber is smaller than/equal than 0 or m
     return "INVALID"  //
   }
    for(let i = n; i < m; i+=n){
      finalNumber += i;
   }
       return finalNumber
 
 }

 //ALT:

 function sumMul(n,m){
    return n<1||m<1 ? 'INVALID' : n*(Math.floor(m/n)*(Math.floor(m/n)+1))/2
  }