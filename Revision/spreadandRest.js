// ... can be used in two ways:
// Spread and rest
// Same syntax, different meaning depending on where it is used.

// Spread means "expand".
// It expands array, object, or arguments into individual values.
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]

const arr3 = [1, 2];
const arr4 = [3, 4];

const result = [...arr1, ...arr2];

console.log(result); // [1, 2, 3, 4]

// Spread in Objects
const obj1 = {
  name: "Arun",
  age: 25,
};
const obj2 = { ...obj1 };
console.log(obj2);

const obj3 = { name: "Arun" };
const obj4 = { age: 25 };
const result1 = { ...obj1, ...obj2 };
console.log(result1); // if the keys are same later one overrides

const obj5 = { name: "Arun" };
const obj6 = { name: "John" };
const result2 = { ...obj1, ...obj2 };
console.log(result2); // { name: "John" }

const nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3
// Without spread: Math.max([1, 2, 3]); // NaN

// Rest Operator - meaning collecting remaining values
function sum(...numbers) {
  console.log(numbers);
}
sum(1, 2, 3, 4); // [1, 2, 3, 4]
// ...numbers collects all arguments into array.

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Rest in array destructuring
const [first, ...second] = [1, 2, 3, 4];
console.log(second);

const person = {
  name: "Arun",
  age: 25,
  city: "Chennai",
};
const { name, ...rest } = person;
console.log(name); // Arun
console.log(rest); // { age: 25, city: "Chennai" }

// Easy Way to Remember
// Spread = expand
// Rest = collect

// Strong FE Engineer Should Know
// Spread copies arrays/objects
// Spread is shallow copy
// Spread merges arrays/objects
// Rest collects remaining values
// Spread in function calls
// Rest in function parameters
// Rest in destructuring
// Same syntax, different behavior based on usage

// Destructuring means extracting values from arrays or objects into variables.
const arr = [10, 20];
const one = arr[0];
const two = arr[1];

const ar = [10, 20];
const [first1, second1] = ar;
console.log(first1); // 10
console.log(second1); // 20

//Optional chaining
// Optional chaining is used to safely access nested properties without getting an error if something is missing.

const user = {
  name: "Arun",
};
console.log(user.address.city);
// This gives error:
// Cannot read properties of undefined
user.address; // undefined which causes error.

// With optional chaining:
const user1 = {
  name: "Arun",
};
console.log(user.address?.city); // undefined

// Now JavaScript checks:
// Does user.address exist?
// If yes → continue
// If no → stop and return undefined

// Strong FE Engineer Should Know
// ?. prevents null/undefined errors
// Returns undefined if chain breaks
// Works with objects, arrays, functions
// Common in React and APIs
// Only checks left side for null/undefined
// Does not validate method existence or type
