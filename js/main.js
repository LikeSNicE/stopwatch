// let timeStart = null;
// let timeStop = null;
// let startInterval = null;
// let timeDuration = 0;
// let flag = false;

// document.querySelector('.container').addEventListener('click', () => {
//   if (!flag) {
//     startTimer();
//     flag = true;
//   } else {
//     stopTimer();
//     flag = false;
//   }
// })

// document.querySelector('.container').addEventListener('dbclick', () => {
//   resetTimer();
// })

// function startTimer() {
//   if (timeStart == null) {
//     timeStart = new Date();
//   }

//   if (!timeStop === null) {
//     timeDuration += new(new Date - timeStop);
//   }

//   startInterval = setInterval(clockRunning, 10);
// }

// function stopTimer() {
//   timeStop = new Date();
//   clearInterval(startInterval);
// }

// function clockRunning() {
//   let currentTime = new Date();
//   let timePassed = new Date(currentTime - timeStart - timeDuration);

//   let seconds = timePassed.getUTCSeconds();
//   let minutes = timePassed.getUTCMinutes();
//   let milliseconds = timePassed.getUTCMilliseconds();

//   milliseconds = Math.floor(milliseconds / 10);

//   document.querySelector("#timer-display").textContent =
//     (minutes = minutes < 10 ? '0' + minutes : minutes) + ":" +
//     (seconds = seconds < 10 ? '0' + seconds : seconds) + ":" +
//     (milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds);
// }

// function resetTime() {
//   clearInterval(startInterval);
//   timeStart = null;
//   timeStop = null;
//   timeDuration = 0;
//   document.querySelector('#timer_display').innerHTML = "00:00:00";
// }




let timeStart = null;
let timeStop = null;
let startInterval = null;
let timeDuration = 0;
let flag = false;

document.querySelector('.container').addEventListener('click', () => {
  if (!flag) {
    startTimer();
    flag = true;
  } else {
    stopTimer();
    flag = false;
  }
});

document.querySelector('.container').addEventListener('dblclick', () => {
  resetTimer();
});

function startTimer() {
  if (timeStart == null) {
    timeStart = new Date();
  }

  if (!timeStop === null) {
    timeStop += new(new Date - timeStop)
  }

  startInterval = setInterval(clockRunning, 10);
}

function stopTimer() {
  timeStop = new Date();
  clearInterval(startInterval);
}

function clockRunning() {
  let currentTime = new Date();
  let timePassed = new Date(currentTime - timeStart - timeDuration);

  let milliseconds = timePassed.getUTCMilliseconds();
  let seconds = timePassed.getUTCSeconds();
  let minutes = timePassed.getUTCMinutes();

  milliseconds = Math.floor(milliseconds / 10);

  document.querySelector('#timer-display').textContent =
    (minutes = minutes < 10 ? '0' + minutes : minutes) + ":" +
    (seconds = seconds < 10 ? '0' + seconds : seconds) + ":" +
    (milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds)

}



function resetTimer() {
  clearInterval(startInterval);
  timeStart = null;
  timeStop = null;
  timeDuration = 0;
  document.querySelector('#timer-display').innerHTML = "00:00:00";
}