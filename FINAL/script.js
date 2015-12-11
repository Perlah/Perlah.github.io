var summer =["what","waves", "elements", "we", "surface", "swim", "when","ocean", "park", "water", "boat", "people", "dry", "sound", "summer", "play", "forest", "school", "outside", "light", "bright", "sea", "sail", "sun", "electric", "fish", "sand"];
var spring =["people", "new", "sound", "air", "animal", "food", "plant", "tree", "earth", "life", "grow", "river", "birds", "red", "warm", "beautiful", "outside", "soil", "spring", "garden", "seeds", "insects", "park", "apple", "corn", "create", "rose", "elements"];
var fall =["time", "people", "down", "sound", "old", "few", "once", "miss", "leave", "color", "piece", "fall", "wood", "fire", "dry", "brown", "cool", "elements"];
var winter =["time", "long", "below", "hard", "night", "winter", "ice", "snow", "elements"];

var seasons =[summer, spring, fall, winter]

var click = true;


$(".summer").click(function(){
    if (click==true) {
    $(".season").hide();    
    $("p").html(summer[Math.floor(Math.random()*winter.length)]);
    $("p").append(" ");
    $("p").append(summer[Math.floor(Math.random()*winter.length)]);
    $("p").append(" ");
    $("p").append(summer[Math.floor(Math.random()*winter.length)]);
    $("p").append(" ");
    $("p").append(summer[Math.floor(Math.random()*winter.length)]);
    $("p").append(" ");
    $("p").append(summer[Math.floor(Math.random()*winter.length)]);
    $("p").append(" ");
    $("body").css("background", "#FFFF00");
    console.log("hello");
    }
})

$(".spring").click(function(){
    if (click==true) {
    $(".season").hide();    
    $("p").html(fall[Math.floor(Math.random()*fall.length)]);
    $("p").append(" ");
    $("p").append(fall[Math.floor(Math.random()*fall.length)]);
    $("p").append(" ");
    $("p").append(fall[Math.floor(Math.random()*fall.length)]);
    $("p").append(" ");
    $("p").append(fall[Math.floor(Math.random()*fall.length)]);
    $("p").append(" ");
    $("p").append(fall[Math.floor(Math.random()*fall.length)]);
    $("p").append(" ");
    $("body").css("background", "#ccff99");
    console.log("hello");
    }
})

$(".fall").click(function(){
    if (click==true) {
    $(".season").hide();    
    $("p").html(spring[Math.floor(Math.random()*spring.length)]);
    $("p").append(" ");
    $("p").append(spring[Math.floor(Math.random()*spring.length)]);
    $("p").append(" ");
    $("p").append(spring[Math.floor(Math.random()*spring.length)]);
    $("p").append(" ");
    $("p").append(spring[Math.floor(Math.random()*spring.length)]);
    $("p").append(" ");
    $("p").append(spring[Math.floor(Math.random()*spring.length)]);
    $("p").append(" ");
    $("body").css("background", "#ff8000");
    console.log("hello");
    }
})

$(".winter").click(function(){
    if (click==true) {
    $(".season").hide();    
    $("p").html(summer[Math.floor(Math.random()*summer.length)]);
    $("p").append(" ");
    $("p").append(summer[Math.floor(Math.random()*summer.length)]);
    $("p").append(" ");
    $("p").append(summer[Math.floor(Math.random()*summer.length)]);
    $("p").append(" ");
    $("p").append(summer[Math.floor(Math.random()*summer.length)]);
    $("p").append(" ");
    $("p").append(summer[Math.floor(Math.random()*summer.length)]);
    $("p").append(" ");
    $("body").css("background", "#99d6ff");
    console.log("hello");
    }
})
   
$(document).ready(function(){
    $("body").keydown(function() {
     $("p").append(seasons[Math.floor(Math.random()*seasons.length)]);
    $("p").append(" ");
    console.log("season");  //how do I get an array to work within an array?
    })
})

