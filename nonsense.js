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
    get secretMessage() { //getters are used to access properties in an object
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

//OOP practice:
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime + rate);
}

//the above is function based and with many parameters, risks being overly complicated

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
}
employee.getWage()

//the following is preferable, because it ~~encapsulates~~ the code block and does not rely on parameters being passed through the function. In practice, this means that information outside the function is not dependent on other information. Generally, the fewer parameters, the better, for more maintainable code.





// 2022-02-24
'use strict';

function example1() {
  const Camera = {
    includes() {
      return true;
    }
  };

  class NPC {
    constructor() {
      this._isVisible = true;
    }

    hide() {
      // If "this" NPC is on-screen, then it shouldn't be allowed to hide.
      if (Camera.includes(this)) {
        return;
      }

      this._isVisible = false;
    }

    show() {
      this._isVisible = true;
    }

    get isVisible() {
      return this._isVisible;
    }
    set isVisible(_) {}
  }

  // Meanwhile, in the adventure game logic...

  const parakeet = new NPC();

  console.log('parakeet.isVisible', parakeet.isVisible);

  parakeet.hide();

  console.log('parakeet.isVisible', parakeet.isVisible);

  parakeet._isVisible = false;

  console.log('parakeet.isVisible', parakeet.isVisible);
}
//example1();

function example2() {
  const Camera = {
    includes() {
      return true;
    }
  };

  class NPC {
    #isVisible = true;

    hide() {
      // If "this" NPC is on-screen, then it shouldn't be allowed to hide.
      if (Camera.includes(this)) {
        return;
      }

      this.#isVisible = false;
    }

    show() {
      this.#isVisible = true;
    }

    get isVisible() {
      return this.#isVisible;
    }
    set isVisible(_) {}
  }

  // Meanwhile, in the adventure game logic...

  const parakeet = new NPC();

  console.log('parakeet.isVisible', parakeet.isVisible);

  parakeet.hide();

  console.log('parakeet.isVisible', parakeet.isVisible);

  parakeet._isVisible = false;

  console.log('parakeet.isVisible', parakeet.isVisible);
}
//example2();

function example3() {
  class Person {
    greet() {
      console.log(`Hi, my name is ${this.name}!`);
    }
  }

  const mike = new Person();

  mike.greet(); // "Hi, my name is undefined!"
​
  const mark = mike;
  const people = [new Person(), new Person()];
​
  mike.name = 'Mike';
​
  mike.greet();
}
//example3();
​
function example4() {
  class Person {
    constructor() {
      this.name = 'Mike';
    }
​
    greet() {
      console.log(`Hi, my name is ${this.name}!`);
    }
  }
​
  const mike = new Person();
​
  mike.greet(); // 'Hi, my name is Mike!'
}
//example4();
​
function example5() {
  class Person {
    constructor(name) {
      this.name = name;
​
      return this; // Not necessary--see below!
    }
​
    greet() {
      console.log(`Hi, my name is ${this.name}!`);
    }
  }
​
  const mark = new Person('Mark');
​
  // When we use the `new` keyword, we're invoking the constructor function.
  // But there's more to it than that. In other words,
  //
  //     new Person('Mark')
  //
  // is **not** the same as
  //
  //     Person('Mark')`
  //
  // Here's what "new" does:
  //
  // 1. Creates an instance of the class (This instance is completely
  //    "generic." It has all the methods of the `Person` class, but it doesn't
  //    have any state, like the `name`.)
  // 2. Invokes the class's "constructor" method, setting the `this` value to
  //    be the instance.
  // 3. Returns the instance (That's why we didn't have to write `return this`
  //    as the last statement.)
​
  mark.greet();
}
example5();