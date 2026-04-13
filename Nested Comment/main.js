const reply = document.querySelector(".reply");
const nestedCommentContainer = document.querySelector(
  ".nested-comment-container",
);

function createReplyBox() {
  const elem = document.createElement("div");
  elem.setAttribute("class", "comment-reply-container");
  elem.innerHTML = `<input type="text" placeholder="Write Your Reply" class="input" name="reply" />
      <button class="btn">Submit</button>
      `;
  return elem;
}

function createAddReply(inputVal) {
  const container = document.createElement("div");
  container.setAttribute("class", "comment");
  container.innerHTML = `
         <div class="card">
          <div class="text">${inputVal}</div>
          <div class="reply">Add Reply</div>
        </div>`;
  return container;
}

nestedCommentContainer.addEventListener("click", (e) => {
  const elem = e.target.closest(".comment");
  const targetElem = e.target;
  if (targetElem.classList.contains("reply")) {
    const replyBox = createReplyBox();
    elem.appendChild(replyBox);
  }
  if (targetElem.classList.contains("btn")) {
    const inputVal = targetElem.previousElementSibling.value;
    const addReplyElem = createAddReply(inputVal);
    elem.appendChild(addReplyElem);
    targetElem.parentElement.remove();
  }
});
