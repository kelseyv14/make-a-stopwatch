
//I feel like I should have color interval and stop interval somewhere up here ?

document.querySelector('#start').addEventListener('click', function(){
setInterval(startTimer, 10);
});

//sets the time places to 0

var startClock = document.querySelector('#timer');

    var tenths = 0
    var seconds = 0 
    var  minutes = 0 

 //sets the order...confused about the ++ and the math but I know it's a rule based on the tests from a few weeks ago   
   
function startTimer() {
    tenths++;
    startClock.innerHTML = `${minutes}: ${seconds}: ${tenths}`
    if (tenths >= 99) {
        tenths = 0;
        seconds++;
    }
    else if (seconds >= 60) {
            seconds = 0;
            minutes++;
    }
    else if (minutes >= 60) {
            //go to google
    }
}
   
 //here is me trying to get the buttons to change  

 //#1

// <script type="text/javascript">
// function change()
// {
// document.getElementById("start").value="Pause";
// }
// </script>

//#2

// function change() 
// {
//     var elem = document.getElementById("start");
//     addEventListener('click');
//     if (elem.value=="Start") elem.value = "Pause";
//     else elem.value = "Start";
// }   

// #3


// function startTimer(e) {
//     if (e.target.innerHTML===start){
//     timer = setInterval(startTimer, 100);
//     e.target.innerHTML = 'Pause';
//     }


// first attempt at changing the color changed the background on click ??


// var seconds;

// function changecolors() {
//     seconds = 1;
//     setInterval(change, 1000);
// }

// function change() {
//     if (seconds === 1) {
//         color = "red";
//         seconds = 2;
//     } else {
//         color = "green";
//         seconds = 1;
//     }

//     document.body.style.background = color;
// }

//this is what finally changed the button but I am missing two intervals

document.querySelector('#start').addEventListener('click', function (e) {
    var startButton = e.target;
    if (startButton.innerHTML === 'Start') {
        startButton.innerHTML = 'Pause';
        interval = setInterval(startTimer, 10)
        colorInterval = setInterval(colorTimer, 1000);
    }
    else if (startButton.innerHTML === 'Pause') {
        startButton.innerHTML = 'Resume';
        clearInterval(interval);
        clearInterval(colorInterval);
        timeoutInterval = setInterval(timeout, 15000)
    }
    else if (startButton.innerHTML === 'Resume') {
        startButton.innerHTML = 'Pause';
        interval = setInterval(startTimer, 10)
        colorInterval = setInterval(colorTimer, 1000);
    }
   
});


//these are the items I need to make this work but I don't know what they look like or where they go
colorTimer
clearInterval


