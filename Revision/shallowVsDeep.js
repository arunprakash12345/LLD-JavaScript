// Shallow copy means only the first level is copied.
// Deep copy means everything, including nested objects, is copied.

const obj1 = {
  name: "Arun",
  address: {
    city: "Chennai",
  },
};

const obj2 = { ...obj1 };
console.log(obj1 === obj2); // false Because outer object is copied.
console.log(obj1.address === obj2.address); // true address is still shared

obj2.address.city = "Bangalore";
console.log(obj1.address.city); // Bangalore
console.log(obj2.address.city); // Bangalore
// This happens because spread only copies one level. both the address points to same address

// Common shallow copy methods:
const copy1 = { ...obj };
const copy2 = Object.assign({}, obj);
const arrCopy = [...arr];

// Deep Copy
// Deep copy means nested objects also get new memory.

const obj4 = {
  name: "Arun",
  address: {
    city: "Chennai",
  },
};

const obj2 = structuredClone(obj4);
console.log(obj1.address === obj2.address); // false because both points to different memory location
// Because nested object also got copied.

obj2.address.city = "Bangalore";
console.log(obj1.address.city); // Chennai
console.log(obj2.address.city); // Bangalore

// Methods to do deep copy
const copy = structuredClone(obj);
const copy3 = JSON.parse(JSON.stringify(obj));
// But this has problems:
// Loses functions, Loses undefined, Loses Date, Loses Map, Loses Set, Loses Symbol

const obj = {
  name: "Arun",
  age: undefined,
  greet() {
    console.log("Hi");
  },
};

const copy5 = JSON.parse(JSON.stringify(obj));

console.log(copy);
// OUTPUT:
// {
//   name: "Arun"
// }

const arr1 = [1, 2, [3, 4]];
const arr2 = [...arr1];

arr2[2][0] = 100;

console.log(arr1); // [1, 2, [100, 4]]

// Because nested array is still shared.

// Strong FE Engineer Should Know
// Spread is shallow copy
// Object.assign() is shallow copy
// Nested objects remain shared
// structuredClone() creates deep copy
// JSON deep copy has limitations
// Arrays can also have shallow copy issue
// React state updates often need careful copying
