const timer = document.getElementById("timer");
const btn25 = document.getElementById("25");
const btn5 = document.getElementById("5");
const btn20 = document.getElementById("20");
const btnPause = document.getElementById("pauseTimer");

let breakChecker = 0;
btn5.addEventListener("click", function() {
    breakChecker = breakChecker + 1;
        if (breakChecker == 3) {
            
        }
});

function focusTime() {
  let min25 = setInterval(countdown, 1000);
  let time = 25;

  btn25.style.visibility = "hidden";
  btn20.style.visibility = "hidden";
  btn5.style.visibility = "hidden";
  btnPause.style.visibility = "visible";
  min25;
  function countdown() {
    if (time < 0) {
      clearInterval(min25);
      alert("Time's up");
    } else {
      timer.textContent = time;
      time = time - 1;
    }
  }
}

function shortBreak() {
  let min5 = setInterval(countdown, 1000);
  let time = 5;

  btn25.style.visibility = "hidden";
  btn20.style.visibility = "hidden";
  btn5.style.visibility = "hidden";
  btnPause.style.visibility = "visible";
  min5;
  function countdown() {
    if (time < 0) {
      clearInterval(min25);
      alert("Time's up");
    } else {
      timer.textContent = time;
      time = time - 1;
    }
  }
}

function longBreak() {
  let min20 = setInterval(countdown, 1000);
  let time = 20;

  btn25.style.visibility = "hidden";
  btn20.style.visibility = "hidden";
  btn5.style.visibility = "hidden";
  btnPause.style.visibility = "visible";
  min20;
  function countdown() {
    if (time < 0) {
      clearInterval(min25);
      alert("Time's up");
    } else {
      timer.textContent = time;
      time = time - 1;
    }
  }
}

function pauseTime() {}
