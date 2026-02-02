const timer = document.getElementById("timer");
const btn = document.getElementById("25");
const focusTime = "Focus Time";
const shortBreak = "Short Break";
const longBreak = "Long Break";
let breakChecker = 1;
let state = focusTime;
let time;
let x;

btn.textContent = state;
// this could probably be a loop ¯\(ツ)/¯
btn.addEventListener("click", function () {
  if (state === focusTime) {
    breakChecker = breakChecker + 1;
  }
});

function fullTimer() {
  if (state === focusTime) {
    time = 1500;
    repeat();
    if (breakChecker === 4) {
      state = longBreak;
      breakChecker = 0;
    } else {
      state = shortBreak;
    }
  } else if (state === shortBreak) {
    time = 300;
    repeat();
    state = focusTime;
  } else if (state === longBreak) {
    time = 1200;
    repeat();
    state = focusTime;
  }

  function countdown() {
    if (time <= 0) {
      clearInterval(x);
      timer.textContent = "Time's up";
      btn.textContent = state;
      btn.style.visibility = "visible";
    } else {
      const min = Math.floor(time / 60);
      const sec = time % 60;
      const secStr = String(sec).padStart(2, "0");
      const minStr = String(min).padStart(2, "0");
      timer.textContent = minStr + ":" + secStr;
      time = time - 1;
    }
  }

  function repeat() {
    x = setInterval(countdown, 1000);
    btn.style.visibility = "hidden";
    countdown();
  }
}
