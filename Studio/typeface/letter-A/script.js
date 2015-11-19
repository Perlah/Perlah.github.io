//$("letter-wrapper").hover(function(){
//    $(".letter-wrapper").css("backgroundcolor", "red")
//});
//
var hover = false;
var gif=["pattern2.gif", "patternA.gif", "pattern-A.gif"];


$(".letter-a").mouseenter(function() {
    if (hover==false) {
        console.log("HI!");
        var randomgif = "url(" + gif[Math.floor(Math.random()*3)] + ")";
        $("body").css("background-image",randomgif);
        hover=true;
    }
});
$(".letter-a").mouseleave(function() {
    if (hover==true) {
        $("body").css("background", "white");
        hover=false;
    }
})
