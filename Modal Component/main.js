const newTask = document.getElementById("newTask");
const popup = document.getElementById("popup");
const close = document.getElementById("close");

newTask.addEventListener("click", () => {
  popup.showModal();
});

close.addEventListener("click", () => {
  popup.close();
});
