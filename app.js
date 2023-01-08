window.onload = function() {
var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');
var seconds = document.getElementById('seconds');
var mil = document.getElementById('miliseconds');
var Interval;
var tens = 00;
var secs = 00;
startBtn.onclick = function (){
        clearInterval(Interval);
        Interval = setInterval(startTimer,10);
}
stopBtn.onclick = function (){
    clearInterval(Interval);
    // Interval = setInterval(startBtn,10);
}
resetBtn.onclick = function (){
    clearInterval(Interval);
    let tens = 00;
    let secs = 00;
    seconds.textContent = secs + '0';
    mil.textContent = tens + '0';
}
function startTimer() {
    tens++;
    if(tens<=9)
    {
        mil.innerHTML = "0"+tens;
    }
    if(tens>9)
    {
        mil.innerHTML = tens;
    }
    if(tens>99)
    {
        secs++;
        seconds.innerHTML = "0"+secs;
        tens = 0;
        mil.innerHTML = "0" + 0;
    }
    if(secs>9)
    {
        seconds.innerHTML = secs;
    }
}
}