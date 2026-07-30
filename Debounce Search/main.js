const searchInput = document.getElementById("search");

// Trailing alone
// function debounce(fn, delay) {
//   let timeout;

//   return function (...args) {
//     clearTimeout(timeout);

//     timeout = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

// leading alone
// function debounce(fn, delay) {
//     let timeout;
//     return function (...args) {
//         if (!timeout) {
//             fn.apply(this, args);
//         }
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             timeout = null;
//         }, delay);
//     };
// }



function debounce(fn, delay, leading = false, trailing = true) {
  let timeout;
  let hasCalledLeading = false;

  return function (...args) {
    const context = this;

    if (leading && !timeout) {
      fn.apply(context, args);
      hasCalledLeading = true;
    }

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      if (trailing && !hasCalledLeading) {
        fn.apply(context, args);
      }

      timeout = null;
      hasCalledLeading = false;
    }, delay);
  };
}



const debouncedSearch = debounce(handleSearch, 500, true);
searchInput.addEventListener("input", handleSearch);

function handleSearch(event) {
  console.log(event.target.value);
}


// What is cancel()?
// It cancels any pending debounced execution by clearing the active timer. 
// The callback will never execute unless the function is invoked again.


// What is flush()?
// It immediately executes the pending debounced callback instead 
// of waiting for the remaining delay, then clears the timer.