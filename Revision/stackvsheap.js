//  Stack vs Heap is mainly about where data is stored in memory.
// Stack memory is fast and stores simple values. Usually primitives goes to stack
let a = 10;
let b = a;
b = 20;
// Memory idea:
a = 10;
b = 10;
// b gets its own separate copy. That is why changing b does not affect a.

// Heap memory is used for objects, arrays and functions.
const person = {
  name: "Arun",
};

// The object itself is stored in heap memory. The variable stores only the reference/address.

// Spread Operator Example
const obj1 = {
  name: "Arun",
};

const obj2 = { ...obj1 };

// Memory idea:
// Stack:
// obj1 ---> 0x123
// obj2 ---> 0x456

// Heap:
// 0x123 ---> { name: "Arun" }
// 0x456 ---> { name: "Arun" }

// Now they are separate objects. So changing one does not affect the other.

// Nested obj trap
// const obj1 = {
//   name: "Arun",
//   address: {
//     city: "Chennai"
//   }
// };

// const obj2 = { ...obj1 };

// here although we have the spread opeartor only the name is pointing to the different memory location
// but wheras the address points to same memory lcoation
