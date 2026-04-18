// Global Execution Context (GEC) is the first execution context created when JavaScript code starts running.
// Whenever a JS file runs, JavaScript first creates the global execution context before executing any code.

// Think of it like:
// JavaScript enters the file
// Creates a global environment
// Allocates memory for variables and functions
// Then starts executing line by line

// There are mainly 2 phases:
// Memory Creation Phase
// Code Execution Phase

// Memory Creation Phase
// JavaScript scans the code first and allocates memory.
var a = 10;

function greet() {
  console.log("Hello");
}

var b = 20;

//Before execution starts, memory looks like:
// a -> undefined
// greet -> full function definition
// b -> undefined

// Code Execution Phase
// Now JavaScript executes line by line:
var a = 10; // now a=10 in the memory
var b = 20; // now b=20 in the global memory

// Global Object
// In browser, global execution context creates: window
console.log(this === window); // true

// Global variables declared with var become properties on window.
let b = 20;
const c = 30;

console.log(window.b); // undefined
console.log(window.c); // undefined

// Important Components of Global Execution Context
// It mainly contains:
// Global object (window in browser)
// this
// Memory for variables/functions

// Strong FE Engineer Should Know
// GEC is created first
// Has memory phase + execution phase
// var gets undefined
// Function declarations get full memory
// Browser global object is window
// Global this in browser is window
// GEC goes first into call stack
// var attaches to window
// let and const do not attach to window

// Function Execution Context
//When a function is called, JavaScript creates a new Function Execution Context (FEC).
// Just like global execution context, function execution context also has:
// Memory creation phase
// Code execution phase

// Important Point
// Every function call gets its own separate execution context.

// in Normal function
//     Strict mode: undefined
//     Non-strict mode: window

// Strong FE Engineer Should Know
// Every function call creates new execution context
// Has memory phase + execution phase
// Parameters get memory first
// Local variables exist only inside function
// Function execution context goes into call stack
// Removed after function finishes
// Every call has separate memory
// this depends on how function is called
