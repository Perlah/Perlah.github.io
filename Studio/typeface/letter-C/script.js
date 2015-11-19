//$("letter-wrapper").hover(function(){
//    $(".letter-wrapper").css("backgroundcolor", "red")
//});
//
var hover = false;
var gif=["c1.gif", "c2.gif", "c3.gif"];

$(".letter-c").mouseenter(function() {
    if (hover==false) {
        console.log("HI!");
        var randomgif = "url(" + gif[Math.floor(Math.random()*3)] + ")";
        $("body").css("background-image",randomgif);
        hover=true;
    }
});
$(".letter-c").mouseleave(function() {
    if (hover==true) {
        $("body").css("background", "white");
        hover=false;
    }
})

