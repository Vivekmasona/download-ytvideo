const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());
app.use(express.static('public'));

var port = process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log('server works at port '+port+"!")
});

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: __dirname});
})

app.get('/downloadmp4', (req, res) => {
    var URL = req.query.URL;

    res.header('Content-Disposition', 'attachment;filename="video.mp4"');

    ytdl(URL, {
        format: "mp4"
        }).pipe(res);
});

app.get('/downloadmp3', (req, res) => {
    var URL = req.query.URL;

    res.header('Content-Disposition', `attachment;filename="music.mp3"`);
    
    ytdl(URL, {
        format: "mp3"
        }).pipe(res);
});


