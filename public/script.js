

var MP4Button = document.getElementById("mp4");
var MP3Button = document.getElementById("mp3");
var OGGButton = document.getElementById("ogg");
var urlInput = document.getElementById("url");

MP4Button.onclick = function(){
    sendURLmp4(urlInput.value);
}

function sendURLmp4(URL){
    window.location.href = `https://download-ytvideo.herokuapp.com/downloadmp4?URL=${URL}`;
}

MP3Button.onclick = function(){
    sendURLmp3(urlInput.value);
}

function sendURLmp3(URL){
    window.location.href = `https://download-ytvideo.herokuapp.com/downloadmp3?URL=${URL}`;
}

OGGButton.onclick = function(){
    sendURLogg(urlInput.value);
}

function sendURLogg(URL){
    window.location.href = `https://download-ytvideo.herokuapp.com/downloadogg?URL=${URL}`;
}
