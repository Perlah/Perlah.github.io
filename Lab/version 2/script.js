var clicked = true;

$(".button").click(function(){
    if (clicked == true){
        location.reload()
        clicked = true;
    }
});

var img=["pattern-quote.jpg", "pattern2.gif", "patternA.gif", "A.jpg", "A2.jpg", "A3.jpg", "A4.jpg", "A5.jpg","A6.gif", "A7.jpg", "A8.jpg", "A9.gif"];
var randomimage = img[Math.floor(Math.random()*12)];
$("body").append("<img src='img/" + randomimage + "'>");



var color=['00','33','66','99','cc','ff'];
var Rcolors = function() {
    return Math.floor(Math.random()*6);
};

var randomColor = function() {
    var r = color[Rcolors()];
    var g = color[Rcolors()];
    var b = color[Rcolors()];
    return "#"+r+g+b;
};

$(document).ready(function() {
    $(".button").click(function() {
        $('div').each(function() {
            $(this).css('background',randomColor());
        });
    });
});

//var symbol=["▙","▝", "▚", "▛", "▜", "▟", "▞"]; //make a pattern in the background useing these pieces
//var randomsymbol = symbol[Math.floor(Math.random()*7)];
//function myFunction() {
//    document.body.style.backgroundColor = symbol[Math.floor(Math.random()*7 + 1)];
//}

var hover = false;

$(".button").mouseenter(function() {
    if (hover==false) {
        console.log("HI!");
        $("body").css("background-image", "url(img/pattern2.gif)");
       //$("body").css('background',randomColor()); //put the color behind the gif of A's
        hover=true;
    }
});
$(".button").mouseleave(function() {
    if (hover==true) {
        $("body").css("background", "white");
        hover=false;
    }
})

//$(".button").mouseenter(function() {
//    if (hover==false) {
//        console.log("HI!");
//        $(this).css('background-image',symbol[Math.floor(Math.random()*7)]);
//        hover=true;
//    }
//});