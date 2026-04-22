const quizContainer = document.querySelector(".quiz-container");
let startIndex = 0;
let endIndex = 10;
let isLoading = false;
function handleLoader(type) {
  const loaderElem = document.querySelector(".loader");
  loaderElem.style.display = type;
}
async function fetchPostsApi(start, end) {
  const url = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_end=${end}`;

  try {
    isLoading = true;
    handleLoader("block");
    const res = await fetch(url);
    const result = await res.json();
    if (result.length === 0) {
      handleDisplayEOC();
      return;
    }
    addPosts(result);
  } catch (error) {
  } finally {
    handleLoader("none");
    isLoading = false;
  }
}

fetchPostsApi(0, 10);

function addPosts(posts) {
  posts.forEach((post, index) => {
    const postContainerElem = document.createElement("div");
    postContainerElem.classList.add("postContainer");
    postContainerElem.innerHTML = `
    <span class="post-num">${post.id}</span>
        <p class="post-body">
          ${post.body}
        </p>`;
    quizContainer.appendChild(postContainerElem);
  });
}
function handleDisplayEOC() {
  const eocElem = document.querySelector(".eoc");
  eocElem.style.display = "block";
}

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= fullHeight - 10 && !isLoading) {
    startIndex = endIndex;
    endIndex += 10;
    console.log("height reached...");
    fetchPostsApi(startIndex, endIndex);
  }
});
