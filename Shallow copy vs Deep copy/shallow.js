let a = 10;
let b = 20;
b = a;
console.log(a, b);// 10 10
// because it is similar to pass by value store the value alone so it points to different memory address

let person1 = { name: "John", age: 30 };
let person2 = { name: "Jane", age: 25 };

person2 = person1;
console.log(person1, person2);
// It stores the reference so the value will affect both

// Destructuring also a shallow copy

let person3 = { ...person1 };
person3.name = "Arun";
console.log(person3);

let person4 = { ...person2 };
console.log(person4);

// This destructuring will not work for the nested items because while iterating if there is array inside it that will store the reference
