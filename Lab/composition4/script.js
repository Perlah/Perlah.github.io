var clicked = true;

$(".button").click(function(){
    if (clicked == true){
        location.reload()
        clicked = true;
    }
});

var image=["cheering-crowd.jpg", "broken-glass.jpg", "people-running.jpg", "NYPD.jpg", "black.png" ];
var sound=["Crowd-Cheer.mp4", "pistol-sound.mp4", "Crowd-panic", "NYPD-Sound"];
var noise;

var randomimage = image[Math.floor(Math.random()*5)];

$("body").append("<img src='images/" + randomimage + "'>");

function getRandomSong(){
                var randSong = sound[Math.floor(Math.random()*sound.length)]; 
                noise = "<source src='music/" + randSong + ".mp3'>" + 
                               "<source src='music/" + randSong + ".ogg'>";
                return noise;
            }

