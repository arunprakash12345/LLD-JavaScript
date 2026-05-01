const pageNumber = document.querySelector(".page-numbers");
const previousBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const pageContent = document.querySelector(".page-content");
const totalPages = 10;
let currentPage = 1;

function renderPageNumbers() {
  pageNumber.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.textContent = i;
    pageBtn.classList.add("page-btn");
    if (i === currentPage) {
      pageBtn.classList.add("active");
    }
    pageNumber.appendChild(pageBtn);
  }
  renderPageContent();
  previousBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}
renderPageNumbers();

previousBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderPageNumbers();
  }
});
nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderPageNumbers();
  }
});

function renderPageContent() {
  pageContent.textContent = `This is content for page ${currentPage}`;
}
renderPageContent();

pageNumber.addEventListener("click", (e) => {
  if (e.target.classList.contains("page-btn")) {
    currentPage = Number(e.target.textContent);
    renderPageNumbers();
  }
});
