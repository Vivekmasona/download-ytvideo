var MP4Button = document.getElementById("mp4");
var MP3Button = document.getElementById("mp3");
var OGGButton = document.getElementById("ogg");
var tGPButton = document.getElementById("3gp");
var AACButton = document.getElementById("aac");
var FLVButton = document.getElementById("flv");
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

tGPButton.onclick = function(){
    sendURL3gp(urlInput.value);
}

function sendURL3gp(URL){
    window.location.href = `https://download-ytvideo.herokuapp.com/download3gp?URL=${URL}`;
}

AACButton.onclick = function(){
    sendURLaac(urlInput.value);
}

function sendURLaac(URL){
    window.location.href = `https://download-ytvideo.herokuapp.com/downloadaac?URL=${URL}`;
}

FLVButton.onclick = function(){
    sendURLflv(urlInput.value);
}

function sendURLflv(URL){
    window.location.href = `https://download-ytvideo.herokuapp.com/downloadflv?URL=${URL}`;
}
