let percentage = 1;
let intervalId;

const progressFill = document.querySelector(".progress-fill");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

start.addEventListener("click", () => {
  if (intervalId) return;
  start.disabled = true;
  stop.disabled = false;
  intervalId = setInterval(() => {
    percentage = percentage + 5;

    if (percentage >= 100) {
      clearInterval(intervalId);
      intervalId = null;
      start.disabled = true;
      stop.disabled = true;
    }

    progressFill.style.width = percentage + "%";
  }, 500);
});

stop.addEventListener("click", () => {
  start.disabled = false;
  stop.disabled = true;
  clearInterval(intervalId);
  intervalId = null;
});

reset.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  percentage = 1;
  progressFill.style.width = "0%";
  start.disabled = false;
  stop.disabled = false;
});
