// First class functions
// First-class functions means functions are treated like normal values in JavaScript.
// You can:
// Store them in variables
// Pass them as arguments
// Return them from other functions
// Put them inside arrays or objects

// Because of this, JavaScript is called a language with first-class functions

// Store Function in Variable
const greet = function () {
  console.log("greet!!");
};
greet(); // Function is stored inside variable just like any other value.

// Pass Function as Argument
function sayHello() {
  console.log("Hello");
}
function execute(fn) {
  fn();
}
execute(sayHello);

// Return function to another function
function outer() {
  return function () {
    console.log("outer");
  };
}

const fn = outer();
fn(); // This is also how closures work.

// Store Function in Object

const name = {
  name: "Arun",
  printName: function () {
    console.log(this.name);
  },
};

console.log(name.printName);

// Stored in function array
const arr = [
  function () {
    console.log("One");
  },
  function () {
    console.log("Two");
  },
];
arr[0]();
arr[1]();

// Important Difference
// First-class function means function behaves like a value.
// Higher-order function means function either:
// Takes another function as argument
// Returns another function

function greet() {
  console.log("Hello");
}

function execute(fn) {
  fn();
}

// greet is first-class function value.
// execute is higher-order function

// Strong FE Engineer Should Know
// Functions are values in JS
// Can store, pass, return functions
// Closures depend on first-class functions
// Callbacks depend on first-class functions
// Difference between first-class and higher-order functions

// ************************************************************************************************

// Call back functions
// Callback function means a function passed as an argument to another function and executed later.
// Since functions are first-class citizens in JavaScript, we can pass them like normal values.

function greet(name) {
  console.log(`Hello ${name}`);
}

function processUser(callback) {
  const name = "Arun";
  callback(name);
}

processUser(greet);
// greet is callback function
// processUser is higher-order function
// Because processUser receives another function.

// Anonymous Callback
function processUser(callback) {
  callback();
}
processUser(function () {
  console.log("Hello world");
});

//Arrow Function Callback
processUser(() => {
  console.log("Hello");
});

// Why Callbacks Matter
// Callbacks are used everywhere in JavaScript:
// setTimeout
// Event listeners
// Array methods
// API calls
// Promises
// Async code

// Callback Hell

// When many nested callbacks happen:
setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

// This becomes hard to read and maintain.
// This is called callback hell.
// Promises and async/await were introduced to solve this.

// Strong FE Engineer Should Know
// Callback = function passed into another function
// Can be sync or async
// Used heavily in JS
// Higher-order function receives callback
// Callback hell problem
// Promises solve callback hell

// ************************************************************************************************
// Function currying

// This is normal function
function sum1(a, b, c) {
  return a + b + c;
}
sum1(1, 2, 3);

// Function Currying
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      return a + b + c;
    };
  };
}
sum(1)(2)(3);
// Each function remembers previous argument using closure.
// Why Currying Matters
// Currying helps in:
// Reusability
// Partial application
// Function composition
// Cleaner code
// Avoid repeating arguments

function multiply(a) {
  return function (b) {
    return a * b;
  };
}
const double = multiply(2);
const triple = multiply(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

function greeting(greet) {
  return function (name) {
    console.log(`${greet}, ${name}`);
  };
}

const sayHi = greeting("Hi");
sayHi("Arun");

// Arrow Function Version
const add = (a) => (b) => (c) => a + b + c;
console.log(add(1)(2)(3)); // 6

// Partial application fixes some arguments.
// Currying converts into chain of single-argument functions.

// Strong FE Engineer Should Know
// Currying uses closures
// One argument at a time
// Helps reusability
// Helps create specialized functions
// Arrow function currying syntax
// Infinite currying concept
// Difference between currying and partial application

// ************************************************************************************************
// Pure vs Impure function
// A pure function always gives the same output for the same input and does not modify anything outside itself.

// A pure function:
// Same input → same output
// No side effects

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5
// For same input, output is always same.
// Also it does not modify anything outside.

// Impure Functions
// Impure function either:
// Gives different output for same input
// Changes external state
// Depends on external variables
// Makes API calls, timers, DOM changes, etc.

let count = 0;
function increment() {
  count++;
  return count;
}
console.log(increment()); // 1
console.log(increment()); // 2

// Same input, different output.
// Because function depends on external variable.

// Impure Because of Randomness
function getRandom() {
  return Math.random();
}

// Different output every time. So impure.

// Strong FE Engineer Should Know
// Pure = same input, same output
// Pure = no side effects
// Mutation makes function impure
// Randomness/date/API makes function impure
// Console log is technically side effect
// React prefers pure logic

//Memoization
function calculate(num) {
  return num * num;
}
calculate(5);
calculate(5);

// so here calculate is calculating again and again if we call

function calculateMemo() {
  const cache = {};
  return function calculate(num) {
    if (cache[num]) return cache[num];

    const result = num * num;
    cache[num] = result;
    return result;
  };
}

const square = calculateMemo();
square(5);
square(5);
square(10);
square(10);

// cache = {
//   5: 25,
//   10: 100
// } // When same input comes again, function skips recalculation.

// Use memoization when:
// Function is expensive
// Same input comes repeatedly
// Result does not change often

// Drawback
// Memoization uses extra memory because cached results stay in memory.
// If too many values are cached, memory usage increases.

// Strong FE Engineer Should Know
// Memoization stores old results
// Uses closure for cache
// Improves performance
// Uses extra memory
// Useful for repeated expensive calculations
// useMemo, useCallback, React.memo are React memoization tools

// Recursion
// Recursion means a function calling itself.
// A recursive function keeps calling itself until some stopping condition is met.
// That stopping condition is called the base case.

function printNumbers(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  printNumbers(n - 1);
}

printNumbers(5);

// Strong FE Engineer Should Know
// Recursion = function calling itself
// Base case is necessary
// Without base case → stack overflow
// Each recursive call goes into call stack
// Used in factorial, Fibonacci, tree traversal, DFS
// Recursion uses more memory than loops

// Important Interview Point
// IIFE is function expression, not declaration.
// That is why it can run immediately.
//Create private scope before let and const this is used to make var private

(function () {
  console.log("Hello");
});
// this is function expression

// Strong FE Engineer Should Know
// IIFE runs immediately
// Uses function expression syntax
// Used to avoid global pollution
// Used before let/const
// Can take arguments
// Arrow function IIFE syntax

// ************************************************************************************************
// Function borrowing
// Function borrowing means using a method from one object with another object.
// This is usually done using:
// call
// apply
// bind

// Why It Is Called Borrowing
// Because method originally belongs to one object, but temporarily used by another object.

// Important Point
// Function borrowing only works with normal functions.
// Arrow functions do not have their own this.

// Strong FE Engineer Should Know
// Borrow methods using call, apply, bind
// Changes this
// call = separate args
// apply = array args
// bind = returns new function
// Arrow functions cannot be borrowed properly
