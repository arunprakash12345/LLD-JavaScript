
// const arr = [1, 2, 3];

// // contains the array prototype -> prototype object
// // Prototype object is the parent of all the objects
// // All the arrays objects will have access to methods defined in the prototype object
// console.log(arr);


// const user = {
//   name: "Arun"
// };
// console.log(user);
// // contains the prototype object




function Car(name, model, price) {
  this.name = name;
  this.model = model;
  this.price = price;
}
Car.prototype.getDetails = function () {
  return `${this.name} ${this.model} ${this.price}`;
}

const car1 = new Car("Toyota", "Corolla", 20000);
const car2 = new Car("Honda", "Civic", 25000);

// console.log(car1); // prints the whole object along with the 
// console.log(car2);

// console.log(car1.getDetails()); // can have access to the get details method as wel are adding into the car's prototype
// console.log(car2.getDetails());


// console.log(Car.prototype);
// console.log(car1.__proto__);
// Both give same thing but prototype is used to access the object and __proto__ is used to access the instance of the object


console.log(Car.prototype.prototype); // undefined
console.log(Car.prototype.__proto__);
// gives the prototype object -> as the car is a instance of the parent object we can access only by proto not by prototype

// Another example:
// [1,2,3].prototype will not give ans
// Array.prototype gives because above one is not the prototype it is the instance of the prototype object

// refer note book **


// Ways to create an object
// 1. {} - object literal
// 2. construction function
// 3. class 
// 4. object.create

const carPrototype = {
  displayInfo: function () {
    return `${this.name} ${this.model} ${this.price}`;
  }
};


// one way of creating object
const c1 = Object.create(carPrototype);
c1.name = "Toyota";
c1.model = "Corolla";
c1.price = 20000;
console.log(c1);

console.log(c1.displayInfo());

// Another way of creating object
const c2 = Object.create(carPrototype);
c2.model = "mustang";
c2.name = "Ford";
c2.price = 180812038;

console.log(c2.displayInfo());

