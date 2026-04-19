"use strict";
// console.log(this);
// Strict mode
// Node - {}
// Browser - window object
// Non-Strict mode
// Node - {}
// Browser - window object

function test() {
  console.log(this);
}
// test();
// Strict mode
// Node - undefined
// Browser - undefined // Because it removes the accidental modification of the global scope
// Non-Strict mode
// Node - global object
// Browser - window object

const obj = {
  name: "Arun",
  greet() {
    console.log(this);
  },
};
// obj.greet();
// Strict mode
// Node - obj
// Browser - obj
// Non-Strict mode
// Node - object
// Browser - object

const obj1 = {
  name: "Arun",
  greet() {
    console.log(this.name);
  },
};
const fn = obj1.greet;
// fn();
// Strict mode
// Node - Error - Typeerror can't read properties it is undefined
// Browser - Error
// Non-Strict mode
// Node - undefined
// Browser - ""

const obj2 = {
  name: "Arun",
  greet: () => {
    console.log(this.name);
  },
};
// obj2.greet();

// Strict mode
// Node - undefined
// Browser - ""
// Non-Strict mode
// Node - undefined
// Browser - ""

const obj3 = {
  name: "Arun",
  greet: () => {
    console.log(this);
  },
};
// obj3.greet();

// Strict mode
// Node - {}
// Browser - window
// Non-Strict mode
// Node - {}
// Browser - window

const obj4 = {
  name: "Arun",
  greet() {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  },
};

// obj4.greet();
// Strict mode
// Node - Arun
// Browser - Arun
// Non-Strict mode
// Node - Arun
// Browser - Arun

const obj5 = {
  name: "Arun",
  greet() {
    function inner() {
      console.log(this.name);
    }

    inner();
  },
};

// obj5.greet();
// Strict mode
// Node - Type Error
// Browser - Error
// Non-Strict mode
// Node - undefined
// Browser - ""

const obj6 = {
  name: "Arun",
  greet() {
    return function () {
      console.log(this.name);
    };
  },
};

// obj6.greet()();
// Strict mode
// Node - Type Error
// Browser - Error
// Non-Strict mode
// Node - undefined
// Browser - ""

const obj7 = {
  name: "Arun",
  greet() {
    return () => {
      console.log(this.name);
    };
  },
};

// obj7.greet()();
// Strict mode
// Node - Arun
// Browser - Arun
// Non-Strict mode
// Node - Arun
// Browser - Arun

function Person(name) {
  this.name = name;
  console.log(this);
}
// const p1 = new Person("Arun");
// Strict mode
// Node - Person obj
// Browser - Person obj
// Non-Strict mode
// Node - Person obj
// Browser - Person obj

function Person1(name) {
  this.name = name;
  this.greet = function () {
    console.log(this.name);
  };
}

const p2 = new Person1("Arun");
// p2.greet();
// Strict mode
// Node - Arun
// Browser - Arun
// Non-Strict mode
// Node - Arun
// Browser - Arun

function Person2(name) {
  this.name = name;

  this.greet = () => {
    console.log(this.name);
  };
}

const p3 = new Person2("Arun");
// p3.greet();
// Strict mode
// Node - Arun
// Browser - Arun
// Non-Strict mode
// Node - Arun
// Browser - Arun

const obj8 = {
  name: "Arun",
  greet: function () {
    console.log(this.name);

    const inner = function () {
      console.log(this.name);
    };

    inner();
  },
};
// obj8.greet();

// Strict mode
// Node - Arun, error(as inner function is not called based on obj it is called as a normal function)
// Browser - Arun, error(as inner function is not called based on obj it is called as a normal function)
// Non-Strict mode
// Node - Arun, error(as inner function is not called based on obj it is called as a normal function)
// Browser - Arun, error(as inner function is not called based on obj it is called as a normal function)

const obj9 = {
  name: "Arun",
  greet: function () {
    console.log(this.name);

    const inner = () => {
      console.log(this.name);
    };

    inner();
  },
};

obj9.greet();
// output for all - Arun because arrow function don't have own this so it borrow from the parent function.
