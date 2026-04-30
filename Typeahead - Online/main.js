const input = document.querySelector("#typeahead-input");
const container = document.querySelector("#suggestions");

const debouncedMakeSuggestion = debounce(makeSuggestion, 300);
input.addEventListener("input", (event) => {
  const text = event.target.value;
  if (text.length === 0) {
    container.innerHTML = "";
    return;
  }
  debouncedMakeSuggestion(text);
});

async function makeSuggestion(text) {
  const suggestionLength = 5;
  try {
    const response = await fetch(
      `https://api.github.com/search/users?per_page=${suggestionLength}&q=${text}`,
    );
    const data = await response.json();
    renderSuggestion(data);
  } catch (error) {
    container.innerHTML = "Something went wrong...";
    console.error("Error fetching suggestions:", error);
  }
}

function renderSuggestion(data) {
  container.innerHTML = "";
  data.items.forEach((item) => {
    const suggestion = document.createElement("div");
    suggestion.classList.add("suggestion");
    suggestion.textContent = item.login;
    container.appendChild(suggestion);
  });
}

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
