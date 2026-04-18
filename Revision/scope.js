// Scope decides where a variable can be accessed.

// JavaScript mainly has:
// Global scope
// Function scope
// Block scope
// Lexical scope
// Scope chain

// Global Scope
// Variables declared outside all functions and blocks belong to global scope.
const name = "Arun";
function greet() {
  console.log(name);
}
greet();
// name is global scope it can be accessed anywhere

// In browser:
var a = 10;
console.log(window.a); // 10

// But:
let b = 20;
const c = 30;

console.log(window.b); // undefined
console.log(window.c); // undefined

// Function Scope
// Variables declared inside function can only be used inside that function.
function test() {
  let a = 10;
  console.log(a);
}
test();
console.log(a); // Error
// Because a only exists inside function.

// var is function scoped.
function test() {
  var a = 10;
}
console.log(a); // Error

//Block Scope
// Variables declared with let and const are block scoped.
// A block means: { }
{
  let a = 10;
  const b = 20;
}

console.log(a); // Error
console.log(b); // Error

// But var ignores block scope:
{
  var a = 10;
}
console.log(a); // 10
// Because var is function scoped, not block scoped.

// Lexical Scope
// Lexical means "where code is written". Inner functions can access variables from outer functions.
function outer() {
  let a = 10;

  function inner() {
    console.log(a);
  }

  inner();
}

outer();
// Because inner is written inside outer, so it can access a.
// Important - Outer cannot access inner variables.

// Scope Chain
// When JavaScript cannot find a variable in current scope, it looks in outer scope. This searching process is called scope chain.
const globalVar = "Global";

function outer() {
  const outerVar = "Outer";

  function inner() {
    const innerVar = "Inner";

    console.log(innerVar);
    console.log(outerVar);
    console.log(globalVar);
  }

  inner();
}
outer();
// JS searches like inner scope -> outer scope -> global scope
// If variable is not found anywhere ReferenceError

// Strong FE Engineer Should Know
// Global scope accessible everywhere
// Function scope only inside function
// Block scope only with let and const
// var is not block scoped
// Lexical scope depends on where function is written
// Scope chain searches outer scopes
// Inner can access outer
// Outer cannot access inner
