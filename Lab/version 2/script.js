var clicked = true;

$(".button").click(function(){
    if (clicked == true){
        location.reload()
        clicked = true;
    }
});

var img=["pattern-quote.jpg", "pattern2.gif", "patternA.gif", "A.jpg", "A2.jpg", "A3.jpg", "A4.jpg", "A5.jpg"];
var randomimage = img[Math.floor(Math.random()*8)];
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

//var symbol=["▙","▝", "▚", "▛", "▜", "▟", "▞"];

//function myFunction() {
//    document.body.style.backgroundColor = symbol[Math.floor(Math.random()*7 + 1)];
//}

var hover = false;

$(".button").mouseenter(function() {
    if (hover==false) {
        console.log("HI!");
        $("body").css("background-image", "url(img/pattern2.gif)");
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