
const stars = document.querySelector(".stars");
const starArray = document.querySelectorAll(".star");
let currIndex;
const number = document.getElementById("number");
stars.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("star")) {

        fillcolors(parseInt(e.target.dataset.index));
    }

});
stars.addEventListener("click", (e) => {
    clearColor();
    if (e.target.classList.contains("star")) {
        currIndex = parseInt(e.target.dataset.index);
        fillcolors(currIndex);
        number.textContent = currIndex;
    }

});

stars.addEventListener("mouseleave", (e) => {
    clearColor();
    starArray.forEach((element, index) => {
        if (index < currIndex)
            element.classList.add("highlight");
    });
})

function fillcolors(i) {
    starArray.forEach((element, index) => {
        if (index < i)
            element.classList.add("highlight");
    });
}
function clearColor() {
    starArray.forEach((element) => {
        element.classList.remove("highlight");
    });
}