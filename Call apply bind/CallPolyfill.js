const person1 = {
    name: "Arun",
    place: "Vedasandur"
}

const person2 = {
    name: "Prakash",
    place: "Dindigul"
}

function printDetails() {
    console.log(`My name is ${this.name} and i live in ${this.place}`);
}

// This is normal Call function that we used by calling it.
// printDetails.call(person1);
// printDetails.call(person2);


// Polyfill -> this is somehting like if the function is not supported by the browser we ourself making the custom function that make it work by creating it the functionality should be same.

Function.prototype.myCall = function (context = {}, ...args) {
    context.newFn = this;       // person1.newFn = printDetails
    context.newFn(...args);     // person1.newFn() → this inside printDetails = person1
    delete context.newFn;       // cleanup
};

printDetails.myCall(person1, "Arun", "Vedasandur");

// Function.prototype -> newFn -> printDetails()
// call() -> passes this
