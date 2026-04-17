// null and undefined are both primitive values, and both represent "absence of value" — but they mean different things.
// undefined means a value was not assigned yet.

// js gives undefined in many situations
let name;
console.log(name); // undefined Because variable is declared but not assigned.

function greet(name) {
  console.log(name);
}

greet(); // undefined

const obj = {
  name: "Arun",
};
console.log(obj.age); // undefined because obj is defined but the age is not there so giving undefined

function test() {}
console.log(test()); // undefined because we are returning anything

// Cases undefined comes
// Variable exists but has no value yet
// Property does not exist
// Function does not return anything
// Missing argument

// null
// null means "empty on purpose." It is intentionally assigned.
let user = null;
let selectedUser = null;
selectedUser = {
  name: "Arun",
}; //later

// undefined = not assigned automatically
// null = intentionally assigned by developer

typeof undefined; // "undefined"
typeof null; // "object"

// IMPORTANT
// Both are primitive
// undefined = default absence of value
// null = intentional absence of value
// typeof null === "object" bug
// null == undefined true
// null === undefined false
// Missing object property returns undefined
// APIs often use null intentionally
// Functions without return give undefined
