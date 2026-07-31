

const person1 = {
    firstName: "Arun",
    lastName: "Prakash",
    age: 25,
    printDetails(hobby) {
        console.log(`I am ${this.firstName} ${this.lastName} and I am ${this.age} years old. My hobby is ${hobby}`);
    }
}

const person2 = {
    firstName: "Karthi",
    lastName: "Keyan",
    age: 26,

}

// Call
// person1.printDetails(["Keyboard", "Youtube"]);
// person1.printDetails.call(person2, ["Coding", "Startup"]);

// Apply
person1.printDetails(["Keyboard", "Youtube"]);
person1.printDetails.apply(person2, ["Coding", "Startup"]);

// Bind
const printDetails2 = person1.printDetails.bind(person2, ["Coding", "Startup"]);
console.log(printDetails2());
