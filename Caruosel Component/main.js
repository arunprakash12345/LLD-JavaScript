const carouselContainer = document.querySelector(".carousel-contianer");
const catArr = [
  "https://img.freepik.com/free-photo/little-cat-sitting-grass_1150-17019.jpg?semt=ais_hybrid&w=740&q=80",
  "https://thumbs.dreamstime.com/b/cute-cate-taking-relax-playing-orange-white-kitten-lying-ground-looking-up-bright-eyes-adorable-domestic-cat-412218436.jpg",
  "https://thumbs.dreamstime.com/b/gray-white-cate-sitting-long-chair-gray-white-cate-sitting-long-chair-looking-to-carmera-259427874.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgF8A8pey55QoToe3XUQhMwh4R-ykfi6wNQ&s",
  "https://i.pinimg.com/736x/df/a3/e2/dfa3e27da4e97d3638a1292753713ba1.jpg",
];
let activeImg = 0;

const imageContainer = document.createElement("div");
imageContainer.classList.add("image-container");
imageContainer.innerHTML += `
        <span class="back">Back</span>
`;
catArr.forEach((cat) => {
  const imgElem = document.createElement("img");
  imgElem.setAttribute("src", cat);
  imgElem.setAttribute("alt", "cat image");
  imgElem.classList.add("catImage");
  imageContainer.appendChild(imgElem);
});

imageContainer.innerHTML += `
        <span class="next">Next</span>
`;
carouselContainer.appendChild(imageContainer);

const next = document.querySelector(".next");
const back = document.querySelector(".back");

next.addEventListener("click", () => {
  activeImg = (activeImg + 1) % catArr.length;
  showImage();
});

function showImage() {
  const catImageArr = document.querySelectorAll(".catImage");
  catImageArr.forEach((cat, index) => {
    if (index == activeImg) cat.classList.add("active");
    else cat.classList.remove("active");
  });
  const dotArr = document.querySelectorAll(".dots");
  dotArr.forEach((dot, index) => {
    if (index == activeImg) dot.classList.add("dotActive");
    else dot.classList.remove("dotActive");
  });
}

back.addEventListener("click", () => {
  activeImg = (activeImg - 1 + catArr.length) % catArr.length;
  showImage();
});

const dotContainer = document.createElement("div");
dotContainer.classList.add("navigation-dots");

for (let i = 0; i < catArr.length; i++) {
  dotContainer.innerHTML += `<div class="dots"></div>`;
}

carouselContainer.appendChild(dotContainer);
showImage();
