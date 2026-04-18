// Hoisting means JavaScript moves declarations to the top of their scope during the memory creation phase.

// Important:
// Only declarations are hoisted
// Assignments are not hoisted

console.log(a);
var a = 10;
// JavaScript internally sees it like:
var a;
console.log(a);
a = 10;
// output is undefined . Because a exists in memory, but value is not assigned yet.

// Hoisting with Function Declaration
// Functions are fully hoisted
greet();

function greet() {
  console.log("Hello");
}
// Output: Hello. // Because greet is fully hoisted so if you call the function it automatically prints.

// Hoisting with Function Expression
// sayHi();

var sayHi = function () {
  console.log("Hi");
};
// Function expression are hoisted like normal variable so it gives undefined
// Output: TypeError: sayHi is not a function
//Because variable is hoisted, but assignment happens later.

// Hoisting with let and const
// let and const are hoisted too, but they stay inside Temporal Dead Zone (TDZ).
// console.log(a1);
let a1 = 10;
// ReferenceError: // Because a exists in memory, but cannot be accessed before declaration line.

// Same for const:
// console.log(b);
const b = 20;
// Output:
// ReferenceError
// console.log(b);

// Temporal Dead Zone
// TDZ is the area between start of scope and actual declaration line.
{
  // TDZ starts
  //   console.log(a); // Error
  let a = 10;
  // TDZ ends
}

var a = 1;
function test() {
  console.log(a);
  var a = 2;
}
// test();

// Strong FE Engineer Should Know
// Hoisting happens in memory phase
// var gets undefined
// Function declarations get full function
// Function expressions behave like variables
// let and const are hoisted but in TDZ
// var gives undefined
// let/const give ReferenceError
// Assignments are not hoisted

const z = 10;

function test() {
  var z = 20;
  console.log(z);
}

test(); // 20
console.log(z); // 10
