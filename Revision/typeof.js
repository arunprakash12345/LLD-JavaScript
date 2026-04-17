// typeof is an operator used to find the type of a value.

// typeof value - syntax

console.log(typeof "Arun"); // string
console.log(typeof 25); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof Symbol()); // symbol
console.log(typeof 10n); // bigint
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () {}); // function are special objects
// Arrays are technically objects in JavaScript.

// Famous JS Bug
console.log(typeof null); // object
//This is one of the oldest JavaScript bugs.
// null is primitive, but typeof null returns "object".

console.log(typeof NaN); // number
// Because NaN belongs to number type internally.
console.log(typeof new String("hello")); // object
// Because new String() creates String object wrapper.

// Strong FE Engineer Should Know
// All primitive typeof outputs
// typeof null === "object" bug
// Arrays return "object"
// Use Array.isArray() for arrays
// Functions return "function"
// typeof NaN === "number"
// typeof typeof 1 === "string"
