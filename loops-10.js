// https://www.hackerrank.com/challenges/30-loops/problem

function readLine() {
   let n = Number(inputString);
   for(let i = 1; i <= 10; i++){
       i + 1
       n * i
       console.log(`${ n } x ${ i } = ${ n*i }`)
   }
    return inputString[currentLine++];
}


//ALT:
function main() {
    const n = parseInt(readLine().trim(), 10);
    
    for (let i = 1; i < 11; i++) {
        console.log(`${n} x ${i} = ${i*n}`);
    }
}