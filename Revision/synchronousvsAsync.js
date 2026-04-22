// Synchronous
// JavaScript is single-threaded. It executes one line at a time.
console.log("Start");
console.log("Middle");
console.log("End");

// output
// start
// middle
// end
// Each line waits for previous line.

// Asynchronous
// Asynchronous code does not block execution.
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 1000);

console.log("End");

// output:
// start
// End
// Timer
// Because timer callback runs later.

// Web APIs
// JavaScript itself does not have:
// setTimeout
// DOM
// fetch
// event listeners
// These are provided by browser Web APIs.

// Flow:
// JS sees setTimeout
// Browser handles timer in Web APIs
// After timer ends, callback moves to callback queue
// Event loop checks if call stack is empty
// Callback enters call stack

// Callback Queue
// Callback queue stores callbacks waiting to execute.
setTimeout(() => {
  console.log("Timer done");
}, 1000);
// callback queue -> timer callback
// But callback executes only when call stack becomes empty.

// Event Loop
// Event loop continuously checks:
// Is call stack empty?
// If yes, move tasks from queues into stack

// Microtask Queue
// Microtask queue has higher priority than callback queue.
// Microtasks include:
// Promise .then
// Promise .catch
// Promise .finally
// queueMicrotask
// MutationObserver

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
// Output:
// Start
// End
// Promise

// Macrotask Queue
// Macrotask queue includes:
// setTimeout
// setInterval
// DOM events
// MessageChannel
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout

// Because:
// Promise callback goes to microtask queue
// setTimeout callback goes to macrotask queue
// Microtasks run before macrotasks

// Promises
// Promise represents future completion or failure of async work.
// States:
// Pending
// Fulfilled
// Rejected

const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});
// Using promise:
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise Chaining
fetchData()
  .then((data) => {
    return processData(data);
  })
  .then((result) => {
    return saveData(result);
  })
  .then((finalResult) => {
    console.log(finalResult);
  })
  .catch((error) => {
    console.log(error);
  });
// Each .then returns a new promise.
// .then() always return a promise

// Promise Combinators
// Promise.all - wait for all promises. If one fails, entire Promise.all fails.

// Promise.allSettled
// Returns result of all promises.

// Promise.race
// Returns first settled promise.

// Promise.any
// Returns first fulfilled promise.
// Ignores rejected promises unless all fail.

// Async / Await

// async function always returns promise.
async function greet() {
  return "Hello";
}

// Equivalent to:
function greet() {
  return Promise.resolve("Hello");
}

// Using await:
async function fetchData() {
  const data = await Promise.resolve("Hello");

  console.log(data);
}

function getUser() {
  return new Promise(() => {
    setTimeout(() => {
      Promise.resolve("Arun");
    }, 1000);
  });
}

async function printUser() {
  const username = await getUser();
  try {
    console.log(username);
  } catch (error) {
    console.log(error);
  }
}

printUser();

// Promise Error Handling
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Async/Await Error Handling
async function fetchUser() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// FAANG-Level Things You Must Know
// JavaScript is single-threaded
// Browser provides Web APIs
// Event loop manages async execution
// Microtasks run before macrotasks
// Promise callbacks are microtasks
// setTimeout callbacks are macrotasks
// Promise chaining returns new promise
// Promise.all fails fast
// Promise.any ignores rejected promises
// async function always returns promise
// await only works inside async function
// try/catch with async-await
// Common event loop output questions
