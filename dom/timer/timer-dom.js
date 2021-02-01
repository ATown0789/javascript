//declare global variables 
let isRunning,
    difTime,
    pauseTime,
    stopped = 0;
let startTime,
    currentTime,
    interval,
    hour,
    minute,
    second;

//set button and display elements to variables
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const timeDisp = document.querySelector("#timeDisp");

//add event listeners to each button
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);


function startTimer() {
    //check to see if timer is already running
    if(!isRunning) {
        startTime = new Date().getTime();
        interval = setInterval(runTime, 1000);
        isRunning = 1;
        stopped = 0;
    }
}

function runTime() {
    //gets the time for each instance of the function
    currentTime = new Date().getTime();
    //check to see if timer is currently paused
    if(pauseTime){
        //if timer is paused add the pause time
        difTime = (currentTime - startTime) + pauseTime;
    }
    else{
        //calculate time difference
        difTime = currentTime - startTime;
    }

    //math to display time correctly
    second = Math.floor((difTime / 1000) % 60);
    minute = Math.floor((difTime / (1000*60)) % 60);
    hour = Math.floor(difTime / (1000*60*60));

    //ternaries to display '00' when each column is less than 10
    timeDisp.innerHTML = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0'+minute : minute}:${second < 10 ? '0'+second : second }`;
}

function stopTimer() {
    if(!difTime){
        //nothing should happen if the stopwatch never started
    }
    else if(!stopped){
    clearInterval(interval);
    //sets the pause time to add to the time difference calculation so it doesn't start over on restart
    pauseTime = difTime;
    stopped = 1;
    isRunning = 0;
    }
    else
        startTimer();
}

function resetTimer() {
    //stops, clears, and resets everything to initial values
    clearInterval(interval);
    pauseTime = 0;
    difTime = 0;
    stop = 0;
    isRunning = 0;
    timeDisp.innerHTML = "00:00:00";
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