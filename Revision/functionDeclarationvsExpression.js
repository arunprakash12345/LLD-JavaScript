// Function declaration and function expression may look similar, but they behave differently in hoisting, execution, and usage.

// Function Declaration
// This is called a function declaration because function is declared directly.
greet();
function greet() {
  console.log("Hello");
}
// Hello

// Function Expression
const greet1 = function () {
  console.log("Hello");
};

// Here function is assigned to a variable. This is called function expression.

// with const variable if we try to access before it prints ReferenceError
// with var if we try to access it gives like undefined

// Named function expression
const greety = function sayHi() {
  console.log("Hello");
};
greety(); // Works
sayHi(); // gives error because sayHi exists only inside function body. SayHi is not defined reference error
