// // every function, object, array created prototype is attached to it.
// const obj = {
//   name: "Arun Prakash",
//   printName: function () {
//     console.log(this.name);
//   },
// };
// // console.log(obj); prototype of obj
// // console.log(obj.hasOwnProperty("name")); // true
// // so whenever we give obj.something it search in the object itself if it didn't found it
// // goes to the parent which is prototype object

// const arr = [1, 2, 3, 4, 5];
// // console.log(arr); //prototype of array

// // Prototype belongs to object definition itself
// // __proto__ helps you to access the same prototype object using instance of an object
// function Car(model, year) {
//   this.model = model;
//   this.year = year;
// }
// Car.prototype.displayInfo = function (model, year) {
//   console.log(`This ${this.model} made in ${this.year}`);
// };

// const car1 = new Car("Honda", 2019);
// const car2 = new Car("Toyoto", 2021);

// //   console.log(car1.displayInfo());
// //   console.log(car2);

// //console.log(Car.prototype); // Gives the prototype object as this is constructor function
// // console.log(car1.prototype); //  Gives undefied as this is instance.

// //console.log(Car.prototype.prototype); // give undefines as this is prototype instance.
// //console.log(Car.prototype.__proto__); // gives an protoyotype obj as we are using proto

// // console.log([1, 2, 3].prototype); // undefiend
// //  console.log(Array.prototype); //prototype object

// //console.log([1, 2, 3].__proto__); //prototype object

// // but this is not at all recommended.
// //   Car.prototype.__proto__.genericDisplayInfo = function (model, year) {
// //     console.log(`This ${this.model} made in ${this.year}`);
// //   };
// //   console.log(car1);
// // -------------------------------------______----------_______-------_______----
// // Interview questions
// // 1. __proto__ to null
// //   const ob = { name: "Arun" };

// //   ob.__proto__ = null;
// //   console.log(ob);
// // Prototype of the ob is removed you can't access any inbuilt function
// // so don't modify or nullify the prototype objects

// //   function Animal() {}
// //   Animal.prototype.speak = function () {
// //     console.log("Speak!");
// //   };

// //   function Dog() {}

// //   Dog.prototype = Object.create(Animal.prototype);
// //   Dog.prototype.constructor = Dog;
// //   Dog.prototype.speak = function () {
// //     console.log("Bow Bow!");
// //   };

// //   const dog1 = new Dog();
// //   console.log(dog1);

// //   Object.prototype.method --> Never do this This is called prototype pollution.

// // Circular prototype chain

// //   function A() {}
// //   function B() {}

// //   let a = new A();
// //   let b = new B();

// // trying to create circular prototype
// //   A.prototype = b;
// //   console.log(a);
// //   try {
// //     B.prototype = a;
// //   } catch (error) {
// //     console.log(error);
// //   }

// function Cat(name) {
//   this.name = name;
// }

// const fluffy = new Cat("Fluffy");
// Cat.prototype = { age: 5 };
// console.log(fluffy);
// // search till the fluffy isntance not goes to the protoype obj
// console.log(fluffy.hasOwnProperty("name")); // true
// console.log(fluffy.hasOwnProperty("age")); //false
// console.log(fluffy);

// # JavaScript OOP + Prototype Mastery Guide

// ############################################################################################################################

// 1. Object Creation
// 2. Constructor Functions
// 3. `new` Keyword
// 4. Prototypes
// 5. Prototype Chain
// 6. `__proto__` vs `prototype`
// 7. Prototypal Inheritance
// 8. Classes
// 9. Static Methods
// 10. Getters / Setters

// ---

// # 1. Object Creation

// There are multiple ways to create objects in JavaScript.
// ## Object Literal

// const user = {
//   name: "Arun",
//   age: 25,
//   greet() {
//     console.log(`Hello ${this.name}`);
//   }
// };

// This is the most common way.

// Important:

// * Keys are properties
// * Functions inside objects are methods
// * `this` refers to object before dot

// user.greet();

// ---

// ## Using Object Constructor

// const user = new Object();

// user.name = "Arun";
// user.age = 25;

// Rarely used in real projects.

// ---

// ## Using Factory Function

// function createUser(name, age) {
//   return {
//     name,
//     age,
//     greet() {
//       console.log(`Hello ${this.name}`);
//     }
//   };
// }

// const user1 = createUser("Arun", 25);
// const user2 = createUser("John", 30);
// ```

// Problem:

// Each object gets separate copy of `greet`.

// ---

// # 2. Constructor Functions

// Constructor functions are used to create multiple objects with same structure.

// ```js
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const p1 = new Person("Arun", 25);
// const p2 = new Person("John", 30);
// ```

// Rules:

// * Function name usually starts with capital letter
// * Used with `new`
// * `this` points to newly created object

// Without `new`:

// ```js
// const p1 = Person("Arun", 25);
// ```

// This is wrong.

// ---

// # 3. new Keyword

// When you do:

// ```js
// const p1 = new Person("Arun", 25);
// ```

// JavaScript internally does:

// ```js
// const obj = {};
// obj.__proto__ = Person.prototype;

// Person.call(obj, "Arun", 25);

// return obj;
// ```

// So `new` does 4 things:

// 1. Creates empty object
// 2. Links object to constructor prototype
// 3. Calls constructor with `this`
// 4. Returns object

// ---

// # 4. Prototypes

// Every function automatically gets a `prototype` property.

// function Person(name) {
//   this.name = name;
// }

// console.log(Person.prototype);

// Initially:

// {
//   constructor: Person
// }

// You can add shared methods:

// Person.prototype.greet = function () {
//   console.log(`Hello ${this.name}`);
// };

// const p1 = new Person("Arun");
// const p2 = new Person("John");

// p1.greet();
// p2.greet();

// Important:

// p1.greet === p2.greet // true

// Because both use same function from prototype.

// ---

// # 5. Prototype Chain

// When you try:

// p1.greet();

// JavaScript searches:

// p1 -> Person.prototype -> Object.prototype -> null

// This searching path is called prototype chain.

// Example:

// console.log(p1.toString());

// `toString` does not exist on `p1`.

// JavaScript finds it in:

// Object.prototype

// ---

// # 6. **proto** vs prototype

// This is one of the most important interview questions.

// ## `prototype`

// `prototype` exists only on functions.

// function Person() {}

// console.log(Person.prototype);

// ## `__proto__`

// `__proto__` exists on objects.

// const obj = {};

// console.log(obj.__proto__);

// Important relation:

// const p1 = new Person();

// p1.__proto__ === Person.prototype // true

// Easy way:

// * `prototype` belongs to constructor function
// * `__proto__` belongs to object instance

// ---

// # 7. Prototypal Inheritance

// One object can inherit from another object.

// ```js
// const animal = {
//   eat() {
//     console.log("Eating");
//   }
// };

// const dog = {
//   bark() {
//     console.log("Barking");
//   }
// };

// dog.__proto__ = animal;

// dog.eat();

// JavaScript searches:

// dog -> animal

// So `dog` can access `eat()`.

// ---

// ## Constructor Function Inheritance

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.eat = function () {
//   console.log(`${this.name} is eating`);
// };

// function Dog(name, breed) {
//   Animal.call(this, name);
//   this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = function () {
//   console.log(`${this.name} is barking`);
// };

// const dog1 = new Dog("Tommy", "Labrador");

// dog1.eat();
// dog1.bark();
// ```

// Prototype chain:

// dog1 -> Dog.prototype -> Animal.prototype -> Object.prototype -> null

// ---

// # 8. Classes

// Classes are syntactic sugar over prototypes.

// ```js
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// const p1 = new Person("Arun", 25);
// p1.greet();
// ```

// Internally classes still use prototype.

// ```js
// p1.__proto__ === Person.prototype // true
// ```

// ---

// ## Class Inheritance

// ```js
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   eat() {
//     console.log(`${this.name} is eating`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }

//   bark() {
//     console.log(`${this.name} is barking`);
//   }
// }

// const dog1 = new Dog("Tommy", "Labrador");
// ```

// ---

// # 9. Static Methods

// Static methods belong to class itself, not instance.

// ```js
// class MathUtils {
//   static add(a, b) {
//     return a + b;
//   }
// }

// console.log(MathUtils.add(2, 3));
// ```

// Wrong:

// ```js
// const m = new MathUtils();

// m.add(2, 3);
// ```

// Because static methods are not available on instances.

// Real example:

// ```js
// Array.isArray([]);
// Object.keys(obj);
// Math.max(1, 2, 3);
// ```

// These are static methods.

// ---

// # 10. Getters / Setters

// Getters and setters allow controlled access to properties.

// class Person {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }
// }

// const p1 = new Person("Arun");

// console.log(p1.name);

// p1.name = "John";

// console.log(p1.name);

// Important:

// Getter is accessed like property, not function.

// console.log(p1.name);

// Not:

// console.log(p1.name());

// ---

// # Important Interview Questions

// ```js
// p1.__proto__ === Person.prototype
// ```

// ```js
// Person.prototype.constructor === Person
// ```

// ```js
// Array.__proto__ === Function.prototype
// ```

// ```js
// Array.prototype.__proto__ === Object.prototype
// ```

// ```js
// Object.prototype.__proto__ === null
// ```

// ```js
// typeof Person // function
// ```

// ```js
// typeof Person.prototype // object
// ```

// ```js
// typeof p1 // object
// ```

// ---

// # FAANG-Level Things You Must Be Able To Explain

// * How `new` works internally
// * Difference between `prototype` and `__proto__`
// * Why prototype methods save memory
// * How prototype chain lookup works
// * How inheritance works with `Object.create`
// * Why classes are syntactic sugar
// * Difference between static methods and instance methods
// * Why getters/setters are useful
// * Difference between own property vs inherited property
// * Difference between factory function vs constructor function
// * Why `hasOwnProperty` works
// * Why arrays can use `map`, `filter`, `reduce`
// * Why functions themselves are objects
// * Why every function has prototype
// * Why arrow functions do not have prototype
