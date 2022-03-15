//Congrats, you found the secret file.
//This is not a codewar, but is a garbage pile for practicing, notes, tips, tricks, etc etc.
//How did you get here?

//Judge me by my wit, not by my code. Amen.

const colors = ['blue', 'red', 'yellow', 'blue', 'white', 'red', 'blue']
const colorCount = {} //creating empty object; will return 'undefined'
for (let i = 0; i < colors.length; i++) { //loop through each element in the array
    console.log(colorCount)
    const color = colors[i] //storing the element inside the variable 'color'
    let count = colorCount[color] //count is another variable holding the value of the property of the colorCount (the property = color) | Checks to see if the property already exists in the colorCount object
    if (!count) { //if there is no existing count, it's the first time the loop has seen that particular property
        colorCount[color] = 1 //sets to one, the first time it's seeing that property
    } else {
        colorCount[color] = count + 1 //adds +1 to the previous count ; has seeen this property before
    }
}
console.log(colorCount)

//Getters and Setters:
const person = {
    firstName: 'red',
    lastName: 'panda',
    get secretMessage() { //getters are used to access properties inn an object
        return 'Turning Red was a good movie and you should watch it.'
    },
        set secretMessage(value) {  //setters change or mutate them
        const parts = value.split(' '); //creates an array out of the value
        this.firstName = parts[0]; //accesses the first item in the array
        this.lastName = parts[1]; //accesses the second item of the array
    }
};
console.log(person)


//Another
const dads = {
	firstName: 'Ron',
  lastName: 'Stampler',
  get fullName() {
  return `${person.firstName} ${person.lastName}`
  },
  set fullName(value) {
  const dadFight = value.split(' '); 
  this.firstName = dadFight[0];
  this.lastName = dadFight[1];
  }
};

person.fullName = 'Glenn Close';

console.log(dads);

