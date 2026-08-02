// Truthy and falsy means how JavaScript treats a value in boolean context.

if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
// JavaScript internally converts the value into true or false.

// There are only a few falsy values in JavaScript:
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN
// Everything else is truthy.
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// TRUTHY
// Everything other than falsy values is truthy.
console.log(Boolean(true)); // true
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(function () { })); // true

// Important case
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean("0")); // true
console.log(Boolean("false")); // true
// Even empty array and empty object are truthy.

const username = "";
if (!username) {
  console.log("Username required");
}
// Because empty string is falsy.

if ("hello") {
  console.log("Runs");
}
// Runs because non-empty string is truthy.

if ([]) {
  console.log("Runs");
}
// Runs because empty array is truthy.

// SHOULD KNOW ******
// All falsy values list
// Empty array/object are truthy
// "false" and "0" are truthy
// !!value converts to boolean
// Used in conditions and validation
// Boolean(value) vs !!value

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Type coercion means JavaScript automatically converts one type into another type when needed.
// There are two types:

// Implicit coercion (JavaScript does it automatically)
// Explicit coercion (you do it manually)

// console.log("5" + 1); // "51"
// Because when + sees a string, it converts the number into string.

console.log("5" - 1); // 4

// Why?
// - only works with numbers. So JavaScript converts "5" into number.

console.log("5" + 1); // "51"
console.log("5" - 1); // 4
console.log("5" * 2); // 10
console.log("10" / 2); // 5
// Only + prefers string concatenation. Other math operators prefer numbers.

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false

// Used automatically in if

if ("hello") {
  console.log("Runs");
}
// Because "hello" becomes true.

// == does coercion.
// console.log(5 == "5"); // true

// Explicit Coercion -> You convert types manually.

Number("10"); // 10
String(10); // "10"
Boolean(1); // true
console.log(Number("123")); // 123
console.log(String(123)); // "123"
console.log(Boolean("hello")); // true

// Important Rules
// + with string = string concatenation
// Other math operators convert to number
// == does coercion
// === does not
// Empty string is falsy
// Empty array/object are truthy
// Always prefer ===

// Strong FE Engineer Should Know
// Implicit vs explicit coercion
// Why "5" + 1 gives "51"
// Why "5" - 1 gives 4
// Why 0 == false
// Why [] == false
// Why null == undefined
// Why === is safer
// Common weird coercion outputs
