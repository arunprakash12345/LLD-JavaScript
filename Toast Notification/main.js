const showToast = document.querySelector(".btn");

showToast.addEventListener("click", () => {
  const status = document.getElementById("status").value;
  const message = document.getElementById("message").value;
  const duration = document.getElementById("duration").value;
  console.log("toast called");
  const toastContainer = document.querySelector(".toast");
  toastContainer.style.display = "block";
  toastContainer.textContent = message;
  if (status === "success") toastContainer.classList.add("success");
  else if (status === "normal") toastContainer.classList.add("normal");
  else if (status === "error") toastContainer.classList.add("error");
  else if (status === "warning") toastContainer.classList.add("warning");
  else if (status === "info") toastContainer.classList.add("info");

  setTimeout(() => {
    toastContainer.style.display = "none";
  }, duration * 1000);
});
