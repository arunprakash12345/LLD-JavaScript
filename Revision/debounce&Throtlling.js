const searchBox = document.getElementById("searchBox");

function handleSearch(e) {
  console.log(e.target.value);
}

function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const debouncedSearch = debounce(handleSearch, 1000);

// searchBox.addEventListener("input", debouncedSearch);

// Throttling
function throttling(fn, delay) {
  let timeout = true;
  return function (...args) {
    if (!timeout) return;
    timeout = false;
    fn(...args);
    setTimeout(() => {
      timeout = true;
    }, delay);
  };
}

const throttleSearch = throttling(handleSearch, 500);
searchBox.addEventListener("input", throttleSearch);
