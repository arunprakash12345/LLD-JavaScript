const messages = {
  firstname: "First name is required",
  lastname: "Last name is required",
};

const inputContainer = document.querySelector(".input-container");

let tooltip; // single tooltip instance

inputContainer.addEventListener("mouseover", (event) => {
  const targetElement = event.target;

  if (targetElement.classList.contains("icon")) {
    const wrapper = targetElement.parentElement;
    const input = wrapper.nextElementSibling;
    const message = messages[input.name];

    // create tooltip
    tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.innerText = message;

    document.body.appendChild(tooltip);

    // position tooltip near icon
    const rect = targetElement.getBoundingClientRect();
    tooltip.style.top = rect.top - 5 + "px";
    tooltip.style.left = rect.left + 25 + "px";
  }
});

inputContainer.addEventListener("mouseout", (event) => {
  if (event.target.classList.contains("icon")) {
    if (tooltip) {
      tooltip.remove();
      tooltip = null;
    }
  }
});
