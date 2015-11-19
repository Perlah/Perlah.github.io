//$("letter-wrapper").hover(function(){
//    $(".letter-wrapper").css("backgroundcolor", "red")
//});
//
var hover = false;
var gif=["w1.gif", "w2.gif", "w3.gif"];


$(".letter-w").mouseenter(function() {
    if (hover==false) {
        console.log("HI!");
        var randomgif = "url(" + gif[Math.floor(Math.random()*3)] + ")";
        $("body").css("background-image",randomgif);
        hover=true;
    }
});
$(".letter-w").mouseleave(function() {
    if (hover==true) {
        $("body").css("background", "white");
        hover=false;
    }
})
