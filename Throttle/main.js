// Why can't we use debounce for scroll events?
// Because debounce waits until the user stops triggering the event. 
// During continuous scrolling, the callback may never execute. 
// Throttle is more appropriate because it limits the execution frequency while 
// still providing periodic updates during the scroll.


// First type: using Timestamp-Based Throttle
function throttle(fn, delay) {
  let lastExecutionTime = 0;

  return function (...args) {
    const currentTime = Date.now();

    if (currentTime - lastExecutionTime >= delay) {
      fn.apply(this, args);
      lastExecutionTime = currentTime;
    }
  };
}


// Second type: using Timer-Based Throttle
function throttle1(fn, delay) {
  let shouldWait = false;

  return function (...args) {

    if (shouldWait) {
      return;
    }

    fn.apply(this, args);

    shouldWait = true;

    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}