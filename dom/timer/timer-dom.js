console.log("time to start the timer!");

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const timeDisp = document.querySelector("#timeDisp");
let difTime,
    startTime,
    currentTime,
    interval,
    hour,
    minute,
    second;

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    startTime = new Date().getTime();
    interval = setInterval(runTime, 1000);
}

function runTime() {
    currentTime = new Date().getTime();
    difTime = currentTime - startTime;
    
    second = Math.floor((difTime / 1000) % 60);
    minute = Math.floor((difTime / (1000*60)));
    timeDisp.innerHTML = `${minute < 10 ? '0'+minute : minute}:${second < 10 ? '0'+second : second }`;
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    stopTimer();
    difTime = 0;

    timeDisp.innerHTML = "0:00";
}

/*
I need to: 
make a variable for each button
make a variable for display element
make a variable to track the elapsed time
add a listener to each button
make a function that starts the timer
make a function that stops the timer
make a function that resets the timer
make a function to return elapsed time for output
variable to get start date.time
variable to get current date.time
variable to get difference
*/