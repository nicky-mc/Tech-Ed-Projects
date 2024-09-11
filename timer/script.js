console.log("oi Nosey!");
// setTimeout is a method
//we need two arguments: task and the time in milliseconds

//setTimeout(function () {
//console.log("after a second you become more of a reprebate");
//}, 1000);
// this is both an anonymous and a callback function
//function TimeoutAction() {
//console.log("i'm out side the timeout function you EGG!");
//}
//setTimeout(TimeoutAction, 2000);
//setInterval(function () {
// console.log("every 6 seconds you look like you lost more brain cells");
//}, 6000);
//const myInterval = setInterval;
// we can setInterval and setTimeout to clearInterval
//function youHaveLostEnoughCells() {
//setTimeout(function () {
//we need to tell the method what interval we want to clear
//clearInterval(myInterval);
// console.log("you have lost enough braincells");
// }, 24000);
//}
//youHaveLostEnoughCells();
//!guidamce from geekforgeeks: https://www.geeksforgeeks.org/how-to-create-stopwatch-using-html-css-and-javascript/ combined with saved cheat sheets
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let hour = 0o0;
let minute = 0o0;
let second = 0o0;
let count = 0o0;

startBtn.addEventListener("click", function () {
  timer = true;
  stopWatch();
});
stopBtn.addEventListener("click", function () {
  timer = false;
});

resetBtn.addEventListener("click", function () {
  timer = false;
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
});
function stopWatch() {
  if (timer) {
    count++;
    if (count == 100) {
      second++;
      count = 0;
    }
    if (second == 60) {
      minute++;
      count = 0;
    }
    if (minute == 60) {
      hour++;
      second = 0;
    }

    let hrString = hour;
    let minString = minute;
    let secString = second;
    let countString = count;

    if (hour < 10) {
      minString = "0" + minString;
    }
    if (second < 10) {
      secString = "0" + secString;
    }
    if (count < 10) {
      countString = "0" + countString;
    }
    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;
    setTimeout(stopWatch, 10);
  }
}
const btnStrt=document.querySelector('.strt');
const btnStp=document.querySelector('.stp');
const btnRst=document.querySelector('.rst');

let hrs=min=sec=ms=0,startTimer;

btnStrt.addEventListener('click',()=>{

  btnStrt.classList.add('start-active');
  btnStp.classList.remove('stop-active');

  startTimer=setInterval(()=>{
    ms++;
    if(ms==100){
      sec++;
      ms=0;
    }
    if(sec==60){
      min++;
      sec=0;
    }
    if(min==60){
      hrs++;
      min=0;
    }
    updateDisplay();
  },10);
});

btnStp.addEventListener('click',()=>{
  clearInterval(startTimer);
  btnStrt.classList.remove('start-active');
  btnStp.classList.add('stop-active');

});

btnRst.addEventListener('click',()=>{
  hrs=min=sec=ms=0;
  clearInterval(startTimer);
  updateDisplay();
  btnStrt.classList.remove('start-active');
  btnStp.classList.remove('stop-active');
});


function updateDisplay(){
  
  phrs=hrs<10?'0'+hrs:hrs;
  pmin=min<10?'0'+min:min;
  psec=sec<10?'0'+sec:sec;
  pms=ms<10?'0'+ms:ms;
  
  document.querySelector('.hrs').innerText=phrs;
  document.querySelector('.min').innerText=pmin;
  document.querySelector('.sec').innerText=psec;
  document.querySelector('.ms').innerText=pms;
}
