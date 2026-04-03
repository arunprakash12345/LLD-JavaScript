const inputContainers = document.querySelectorAll(".input-box");

inputContainers.forEach((input, index) => {
    input.addEventListener("keydown", (e) => {
        if (e.key >= 0 && e.key <= 9) {
            input.value = e.key;
            if (index < inputContainers.length - 1)
                inputContainers[index + 1]?.focus();
            e.preventDefault();
        }

        else if (e.key === "Backspace") {
            input.value = "";
            if (index > 0) {
                inputContainers[index - 1]?.focus();
                e.preventDefault();
                inputContainers[index - 1].value = "";
            }
        }
    })
})