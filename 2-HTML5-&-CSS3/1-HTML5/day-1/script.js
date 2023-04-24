var coloredText = document.getElementById("colorText");

var redRange = document.getElementById("red");
var greenRange = document.getElementById("green");
var blueRange = document.getElementById("blue");


redRange.addEventListener("input", function() {
    coloredText.style.color = `rgb(${this.value}, ${greenRange.value}, ${blueRange.value})`
})
greenRange.addEventListener("input", function() {
    coloredText.style.color = `rgb(${redRange.value}, ${this.value}, ${blueRange.value})`
})
blueRange.addEventListener("input", function() {
    coloredText.style.color = `rgb(${redRange.value}, ${greenRange.value}, ${this.value})`
})

/////////////////////////////////////////////////////////

var audio = document.querySelector("audio");

// Play Button
var playButton = document.getElementById("play");
playButton.addEventListener("click", function (){
    audio.play();
});

// Pause Button
var pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", function() {
    audio.pause();
});

// Stop Button
var stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function () {
    audio.load();
    audio.pause();
});

// Time Range
window.addEventListener("load", function () {
    var timeRange = document.getElementById("time");
    timeRange.max = audio.duration;

    timeRange.addEventListener("input", function () {
        audio.currentTime = timeRange.value;
    });
    
    audio.addEventListener("timeupdate", function () {
        timeRange.value = audio.currentTime;
    });
});

// Volume Range
var volumeRange = document.getElementById("volume");
volumeRange.addEventListener("input", function () {
    audio.volume = volumeRange.value;
});

// Navigate through songs
var songList = document.getElementsByTagName("ul")[0];

songList.addEventListener("click", function (event) {
    if(this === event.target) {
        return
    }

    var element = event.target;
    var audioSource = document.getElementById('audioSource');

    var imageTag = document.getElementById("song-cover");
    var titleTag = document.getElementById("song-title");

    imageTag.src = element.getAttribute("data-cover");
    titleTag.innerHTML = element.innerHTML;
    audioSource.src = element.getAttribute("data-song");
    audio.load();
})