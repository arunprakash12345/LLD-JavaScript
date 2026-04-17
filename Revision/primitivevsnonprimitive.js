// Primitive
let a = 10;
let b = a;
b = 20;
console.log(a, b); // 10 20 because pritive copy only the values no the references

// Primitive values are immutable
let str = "Hello";
str[0] = "w";
str = "world"; // this assigns value as world but it will actully create new space and insert it hellow will be garbage collected
console.log(str); // Hello it does not change because Strings are immutable.

// Primitive compare by Value
console.log(10 === 10); // true
console.log("hi" === "hi"); //true

// Stored in stack memory

// Non-Primitive
const person = {
  name: "Arun",
};
const person1 = person;
person1.name = "Rahul";
console.log(person.name, person1.name); // Rahul Rahul because in non primitive data types it store by reference so the value of person oebject updated.
// Non-Primitive = Mutable
// Objects and array can be changed
const arr = [1, 2, 3, 4, 5];
arr[0] = 0;
console.log(arr); // [0,2,3,4,5] because it is mutable meaning we can change those values

function changeValue(x) {
  x = 100;
}
let a1 = 10;
changeValue(a1);
console.log(a1); // 10

// Non-Primitive compare by reference
// console.log({} === {}); false
// console.log([] === []); false

typeof "hello"; // string
typeof 10; // number
typeof true; // boolean
typeof undefined; // undefined
typeof Symbol(); // symbol
typeof 10n; // bigint
typeof {}; // object
typeof []; // object
typeof function () {}; // function
typeof null; // object
// This is a historical bug in JavaScript. null is primitive, but typeof null gives "object".

// Strored in heap memory
// Variables store reference to heap location.
let user1 = {
  name: "Arun",
};
// let user1 this is stored in stack
// {name: "Arun"} this is stored in heap

function changeName(obj) {
  obj.name = "John";
}

let person3 = {
  name: "Arun",
};

changeName(person3);

console.log(person3.name); // John

// Interview question
let x = [1, 2];
let y = a;
// y.push(3);
console.log(x); // [1, 2, 3]

// because both points to single array

// To create a copy to y
let x1 = [1, 2];
let y1 = [...x1];
y1.push(3);
console.log(x1); // [1,2]
console.log(y1); // [1,2,3]

// Important note
const per = { name: "Arun" };
per.name = "Prakash";
console.log(per);

// here can change the name of the const because it is pointing to reference not the value so if we change value alone fine
// but we can't change the whole refernece for example
// const per = { name: "karthi" }; syntax error per is already declared.
