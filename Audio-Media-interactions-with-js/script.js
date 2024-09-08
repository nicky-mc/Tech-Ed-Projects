console.log("G'day! Cobba");
// how can we slect the audio with JavaScript
const audioPlayer = document.getElementById("audio-player");
const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const stopButton = document.querySelector("#stop");
const skipButton = document.querySelector("#skip");
const volumeControl = document.querySelector("#volume");
console.log(playButton);
//let's make the play button work
//we do this by adding an event to our button
// so this includes an event handler and an event listner
function playAudio() {
  audioPlayer.play();
}
playButton.addEventListener("click", playAudio);

function pauseAudio() {
  audioPlayer.pause();
}
pauseButton.addEventListener("click", pauseAudio);

function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}
stopButton.addEventListener("click", stopAudio);
function skipAudio() {
  audioPlayer.currentTime = audioPlayer.currentTime + 5;
}
skipButton.addEventListener("click", skipAudio);

volumeControl.addEventListener("change", function (event) {
  audioPlayer.volume = event.target.value;
});
