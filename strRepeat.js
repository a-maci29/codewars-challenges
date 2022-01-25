// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/solutions/javascript

// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  let repeat = s.repeat(n)
  return repeat
}

//alt w/ arrow function:
repeatStr = (n, s) => s.repeat(n)

repeatStr = (n, s) => s.repeat(n)