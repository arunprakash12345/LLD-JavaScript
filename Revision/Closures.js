// Closure means a function remembers variables from its outer scope even after the outer function has finished execution.
// This is possible because of lexical scope.

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
const fn = outer();
fn(); // 1
fn(); // 2
fn(); // 3

// What Happens Internally
// Normally after outer() finishes, its variables should disappear. But inner() is still using count.
// So JavaScript keeps count alive in memory. That preserved connection is called closure.

function counter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    },
  };
}

const c = counter();

c.increment(); // 1
c.increment(); // 2
c.decrement(); // 1
// count cannot be accessed directly:
console.log(c.count); // undefined
// Because only returned functions can access it.
// This is data hiding using closure.

// Very Common Interview Question
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Because var is function scoped. All callbacks share same i. By the time timer runs, loop is finished and i = 4.
// output is : 4 4 4

for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Because let creates new block-scoped variable for each iteration.
// output: 1 2 3

// Important Interview Line: Closures do not copy variables. They keep reference to the actual variable.
function outer() {
  let a = 10;

  return function () {
    console.log(a);
  };
}
// Inner function does not store 10. It stores access to variable a.

// Closure memory leak happens when a closure keeps holding references to variables or large objects that are no longer needed.
// Because closure remembers outer variables, JavaScript cannot garbage collect them as long as the closure still exists.

// Remove event listeners
// Clear intervals/timeouts
// Avoid keeping unnecessary large objects in closure
// Store only needed values
// Set unused references to null

// function attachEvent() {
//   const hugeData = new Array(1000000).fill("test");

//   document.getElementById("btn").addEventListener("click", function () {
//     console.log(hugeData[0]);
//   });
// }
// Here in this example we are using only the hugeData[0]. but storing the bigdata variable is memory leake and also unwanted

// function attachEvent() {
//   const hugeData = new Array(1000000).fill("test");
//   const firstValue = hugeData[0];

//   document.getElementById("btn").addEventListener("click", function () {
//     console.log(firstValue);
//   });
// }

// Separating the firstValue and remembering the closure part alone so this way we can reduce the memory usage

// Disadvantages of closure
// Memory Leaks
// Harder to Debug
// Unexpected Shared State
// Performance Overhead
// Old Data Can Stay Alive

// Strong FE Engineer Should Know
// Closures increase memory usage
// Large data in closure can cause memory leaks
// Shared state can cause bugs
// Too many closures can reduce performance
// Harder to debug because variables stay alive
// Remove unused closures, timers, and listeners

// Closures are heavily used with async code because async callbacks execute later, but still remember variables from outer scope.
function test() {
  let name = "Arun";

  setTimeout(() => {
    console.log(name);
  }, 1000);
}

test();
// Even though test() has finished execution, callback still remembers name.
