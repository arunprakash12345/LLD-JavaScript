const searchInput = document.getElementById("search");

let timeout;
const debounce = (fn, time) => {
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      return fn(...args);
    }, time);
  };
};

const debouncSearch = debounce(handleSearch, 500);
searchInput.addEventListener("input", debouncSearch);

function handleSearch(event) {
  console.log(event.target.value);
}
