"use strict";

// console.log(this);
// Strict Mode
// Window object in browser.
// {} in node

// Not strict mode
// Window object in browser.
// {} in node


// function a() {
//     console.log(this);
// }
// a();  without any reference of an object
// this inside non strict mode - (this subtitution)
// this subtitution - if there is a value of undefined or null it will be replaced buy window/global obj
// Strict Mode
// Browser - undefined
// Node - undefined

// Not strict mode
// Browser - window
// Node - global obj

// this keyword value depends on how the function is called
// in strict mode if we call
// window.a(); // give us window obj



// const obj = {
//     b: 10,
//     x: function () {
//         console.log(this);
//     }
// }
// obj.x();

// Strict mode
// browser - value of the obj
// node - value of the obj

// Non Strict mode
// browser - value of the obj
// node - value of the obj


// The value of this can be modified using call, apply, bind
// const student = {
//     name: "Arun",
//     printName: function () {
//         console.log(this.name);
//     }
// }

// student.printName();
// Strict and non strict
// Prints Arun

// const student2 = {
//     name: "Prakash"
// }
// student.printName.call(student2);
// Strict and non strict
// Prints Prakash
// as the call changes the reference or kind of function sharing with the student and when the printName call (student2) it take student2 as a value



// Arrow functions
// arrow function does not have the own this it takes value of this from the lexical env

const obj3 = {
    x: 10,
    y: () => {
        console.log(this);
    }
}
obj3.y();

// Strict mode
// browser - window obj -> it is not inside global space but it is taking lexical env value
// node - {}


const obj4 = {
    x: 10,
    y: function () {
        const z = () => {
            console.log(this);
        }
        z();
    }
}
// obj4.y();

// Strict mode
// browser - it gives the value of obj -> obj4 is the lexically enclosed on obj4
// node - it gives the value of obj
// Enclosing lexical context