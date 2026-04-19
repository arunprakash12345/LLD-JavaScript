// call, apply, and bind are used to manually control what this should point to.
// Normally this depends on how function is called.
const user = { name: "Arun" };
function greet() {
  console.log(this.name);
}
// greet();

// undefined because it search in a global object where name is not present so gives as undefined.

// call()
// call immediately invokes the function and allows us to set this.
// syntax can be -> functionName.call(thisValue, arg1, arg2)

// greet.call(user);
// This works because we are changing the this from global to the user object.

// call with Arguments
function greet1(city) {
  console.log(`${this.name} from ${city}`);
}
const user1 = {
  name: "Arun",
};
// greet1.call(user1, "Chennai");
// Syntax would be functionName.call(thisValue, list of args).
// If it is multiple arguments it takes as a comma seperated

// apply()
// apply is almost same as call. But only difference is call take argument as comma seperated but
// apply take argument as arrays
// syntax -> functionName.apply(thisValue, [arg1, arg2])

function printDetails(city, dob) {
  console.log(`${this.name} from ${city} since ${dob}`);
}
// printDetails.apply(user1, ["Chennai", "12-12-2000"]);

// bind()
// bind does not immediately call the function. It fixes the this and then return form there
const bindFunction = greet.bind(user);
console.log(bindFunction());

// Easy Way to Remember
// call → call now, args separate
// apply → call now, args array
// bind → call later, returns new function

// Function Borrowing
const person1 = {
  name: "Arun",
  greet() {
    console.log(this.name);
  },
};

const person2 = {
  name: "John",
};

person1.greet.call(person2);
// person2 borrowed greet from person1.

function multiply(a, b) {
  return a * b;
}
const dobule = multiply.bind(null, 2);
console.log(dobule(5));

// Important thing
// Bind this win. Once function is bound, this cannot be changed. Because bound this always wins.

// Arrow Function Limitation
// Arrow functions do not have their own this.
// So call, apply, and bind do not work with arrow functions.

// Strong FE Engineer Should Know
// call, apply, bind change this
// call uses separate arguments
// apply uses array arguments
// bind returns new function
// Function borrowing
// Partial application with bind
// Bound function cannot be rebound
// Arrow functions ignore call, apply, bind
