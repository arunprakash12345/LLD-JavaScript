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

const bind = printDetails.bind(person1);
bind();


// Polyfill -> this is somehting like if the function is not supported by the browser we ourself making the custom function that make it work by creating it the functionality should be same.

Function.prototype.myBind = function (context = {}, ...args) {
    const fn = this;
    return function () {
        context.newFn = fn;
        context.newFn(...args);
        delete context.newFn;
    }

};

const bindFn = printDetails.myBind(person1);
bindFn();


