// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 2
//     },
//     draw: function () { //functions can be inside an object, and an object can hold other objects.
//         console.log('draw');
//     }
// }

// circle.draw()

//use a constructor function to eliminate the issue of using a template literal to create an object multiple times if it contains a function. If an object has a method, it is referred to as having "behavior"


//factory function:
function createCircle(radius) {
    const circle = {
        radius: 1,
        draw: function () { //functions can be inside an object, and an object can hold other objects.
            console.log('draw');
        }
    };

}

const circle = createCircle(1);

//constructor function:
function Circle(radius) {
    this.radius = radius; //the 'this' keyword refers to that code of block
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1); //this will create an empty object, set 'this' to point to this object, and return the object from that function. no need to put 'return'; it is implicit in 'this'

//Types:
let x = 10 //stores the value of 10 in the variable named 'x'
let y = x //copies the value of x into y

x = 20 //will reassign x's value to 20, while y's value remains the same; each variable is independent of the other

//Primitives are copied by their value, and objects by their reference. Therefore, the following:
let x = {value: 10}
let y = x

//will have the same value, because they are now referencing the location of that information; in objects, the information is not stored directly in the variable.