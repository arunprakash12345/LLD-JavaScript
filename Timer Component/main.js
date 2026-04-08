const hours = document.getElementById("hours");
const mintues = document.getElementById("mintues");
const seconds = document.getElementById("seconds");
let totalSeconds;
let intervalId;
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const continueBtn = document.getElementById("continue");

function checkValid(hrs, min, sec) {
    if (hrs < 0 || min < 0 || sec < 0) {
        window.alert('Enter time to start the timer');
        return false;
    }
    if (hrs > 24 || min > 60 || sec > 60) {
        window.alert("Enter proper values");
        return false;
    }
    return true;
}
function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        totalSeconds--;
        const hrs = Math.floor(totalSeconds / 3600);
        const min = Math.floor((totalSeconds % 3600) / 60);
        const sec = Math.floor(totalSeconds % 60);
        if (totalSeconds < 0) {
            alert("Time's up!");
            clearInterval(intervalId);
            start.disabled = false;
            continueBtn.style.display = "none";
            pause.style.display = "block";
            return;
        }
        updateUI(hrs, min, sec);
    }, 1000)
}
function updateUI(hrs, min, sec) {
    hours.value = String(hrs).padStart(2, "0");
    mintues.value = String(min).padStart(2, "0");
    seconds.value = String(sec).padStart(2, "0");
}
function calculateSeconds(hrs, min, sec) {
    totalSeconds = (hrs * 60 * 60) + (min * 60) + sec;
    return totalSeconds;
}
start.addEventListener("click", () => {
    const hrs = parseInt(hours.value) || 0;
    const min = parseInt(mintues.value) || 0;
    const sec = parseInt(seconds.value) || 0;
    if (!checkValid(hrs, min, sec)) return;
    totalSeconds = calculateSeconds(hrs, min, sec);
    runTimer();
    start.disabled = true;
    // console.log(totalSeconds);
})

pause.addEventListener("click", () => {
    continueBtn.style.display = "block";
    pause.style.display = "none";
    clearInterval(intervalId);
})

continueBtn.addEventListener("click", () => {
    continueBtn.style.display = "none";
    pause.style.display = "block";
    runTimer();
});

reset.addEventListener("click", () => {
    clearInterval(intervalId);
    totalSeconds = 0;
    updateUI(0, 0, 0);
    start.disabled = false;
    continueBtn.style.display = "none";
    pause.style.display = "block";
})