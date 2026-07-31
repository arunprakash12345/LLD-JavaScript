// 1. Setting the prototype to null 

const a = [1, 2, 3];
a.__proto__ = null; // this actully removes the prototype object itself -> no access to map, push, etc
// ***** Important we should not do this*****
console.log(a);


// 2. Prototype manipulation

function Animal() {

}
Animal.prototype.animalSpeak = function () {
    console.log("Animal speak");
}

function Dog() {
}


const d1 = new Dog();
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // **Very important**
Dog.prototype.dogSpeak = function () {
    console.log("Dog speak");
}
console.log(d1);



// Never do this
// Object.prototype.method  - affects the whole js program



// 3. Circular prototype

// function A() { }
// function B() { }

// const a1 = new A();
// const b1 = new B();


// try {
//     A.prototype = b1;
//     B.prototype = a1;
//     console.log(a1);
//     console.log(b1);
// }
// catch (error) {
//     console.log(error);
// }



// 4. Direct prototype assignement

function Cat(name) {
    this.name = this.name;
}

const fluffy = new Cat("Catty");

fluffy.__proto__ = { age: 5 };

console.log(fluffy.age);
console.log(fluffy.hasOwnProperty("age")); // true - b/c it's in prototype check only till the object not go inside prototype
console.log(fluffy.hasOwnProperty("name")); // false - b/c it's on the object