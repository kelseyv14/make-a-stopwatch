var startButton = document.querySelector('#start'); 
var timeDisplay = document.querySelector('#timeDisplay');
var tenths = 0;
var seconds = 0; 
var  minutes = 0; 

makeStartButtonClickable();

function makeStartButtonClickable() {
startButton.addEventListener('click', startWatch);
}
function startWatch() {
    if (startButton.innerText.trim() === "start") {
        setInterval(updateTimer, 100);
        changeButtonToPause();
    }
     else if (startButton.innerHTML === 'pause') {
        startButton.innerHTML = 'resume';
        clearInterval(interval);
        clearInterval(colorInterval);
        timeoutInterval = setInterval(timeout, 15000)
    }
    else if (startButton.innerHTML === 'resume') {
        startButton.innerHTML = 'pause';
        interval = setInterval(startTimer, 10)
        colorInterval = setInterval(colorTimer, 1000);
    }
}

function updateTimer() {
    startCountingUp();
    updateTimerDisplay();
if (tenths === 0) {
    changeColorOfTimer();
}
}

function startCountingUp() {
    tenths++;
    if (tenths === 10) {
        seconds++;
        tenths = 0;
    }
    if (seconds === 60) {
            minutes++;
            seconds = 0;
    }
   
}
function updateTimerDisplay() {
timeDisplay.innerHTML = `${minutes}: ${seconds}: ${tenths}`;
}  

function changeColorOfTimer() {
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);

    timeDisplay.style.color = `rgb(${red}, ${green}, ${blue})`;

}


function changeButtonToPause() {
    startButton.innerHTML = 'pause';
}



 
   
   





