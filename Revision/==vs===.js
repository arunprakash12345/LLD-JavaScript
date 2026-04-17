// == is loose equality.
// === is strict equality.

// Strict equality is preferred in almost all cases.
// === checks the value and the type as well all must be same
console.log(10 === 10); // true
console.log(10 === "10"); // false

// Because:
// First one: both are number
// Second one: one is number, one is string

console.log(true === true); // true
console.log(null === undefined); // false
// console.log([] === []); // false
// console.log({} === {}); // false
// Objects compare by reference.

// == It checks values after type conversion.
// JavaScript tries to convert one value into another type.
console.log(10 == "10"); // true

console.log(true == 1); // true
console.log(false == 0); // true
// true -> 1
// false -> 0

console.log(null == undefined); // true

console.log("" == 0); // true
console.log("0" == 0); // true
console.log([] == 0); // true
console.log([] == ""); // true
console.log([1] == 1); // true
// Because JavaScript does weird type conversion internally.
