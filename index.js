let home = 0;
let guest = 0;
let homeResult = document.getElementById("home-result");
let guestResult = document.getElementById("guest-result"); 
const countdown = null;

let initialTime = 12*60;
let timerDisplay = document.getElementById("timer-display");

function formatTime(seconds){
    let mins = Math.floor(seconds/60);
    let secs = seconds % 60;
    secs = secs === 0 ? "00" : secs;
    time = mins + ":" + secs;
    return time;
}

timerDisplay.innerText = formatTime(initialTime);

function startTimer(){
    
      if (countdown) {
    clearInterval(countdown);
  }

  remainingTime = initialTime;
  
  timerDisplay.textContent = formatTime(remainingTime);
    countdown = setInterval(() => {
    remainingTime--;
    let time = formatTime(remainingTime);
    timerDisplay.innerText = formatTime(remainingTime);
    
    if(remainingTime <= 0)
    {
        clearInterval(countdown);
        timerDisplay.innerText = "Time is up!";
    }
}
, 1000)

}

startTimer();


function addHome(x){
    home += x;
    homeResult.innerText = home;
}

function addGuest(x){
    guest += x;
    guestResult.innerText = guest;
}

function restart(){
    home= 0;
    guest = 0;
    homeResult.innerText = 0;
    guestResult.innerText = 0;
    startTimer();
}

