var clicked = true;

$("#button").click(function(){
    if (clicked == true){
        location.reload()
        clicked = true;
    }
});

var image=["cheering-crowd.jpg", "broken-glass.jpg", "people-running.jpg", "NYPD.jpg", "black.png" ];
var sound=["Crowd-Cheer", "pistol-sound.mp4", "Crowd-panic", "NYPD-Sound"];
var noise;

var randomimage = image[Math.floor(Math.random()*5)];

$("body").append("<img src='images/" + randomimage + "'>");

//function getRandomSong(){
//                var randSong = sound[Math.floor(Math.random()*sound.length)]; 
//                noise = "<source src='music/" + randSong + ".mp3'>"; 
//                return noise;
//            }
//

function sound_return(){
    var sound=["Crowd-Cheer", "pistol-sound", "Crowd-panic", "NYPD-Sound"];
    var randomSong = sound[Math.floor(Math.random()*sound.length)];
        return sound;
    }
//var audioElement = document.createElement('audio');
//audioElement.setAttribute('src', 'images/' + randomSong);
//audioElement.play();

//test
  var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'images/'+ sound_return());
        audioElement.play()
        $.get();
        audioElement.addEventListener("load", function() {
        audioElement.play();
        }, true);

    $('#button').click(function(event){
          console.log("play")
            event.preventDefault();
            audioElement.play();    
    });



//$(document).ready(function(){
//    $("#button").click(function(){
//        console.log("hello")
//        function getRandomSong(){
//            console.log("play")
//                var randSong = sound[Math.floor(Math.random()*sound.length)]; 
//                noise = "<source src='images/" + randSong + ".mp3'>"; 
//                return noise;
//            };
//    });
//});
//