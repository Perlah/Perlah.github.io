//$("letter-wrapper").hover(function(){
//    $(".letter-wrapper").css("backgroundcolor", "red")
//});
//
var hover = false;
var gif=["l1.gif", "l2.gif", "l3.gif"];


$(".letter-l").mouseenter(function() {
    if (hover==false) {
        console.log("HI!");
        var randomgif = "url(" + gif[Math.floor(Math.random()*3)] + ")";
        $("body").css("background-image",randomgif);
        hover=true;
    }
});
$(".letter-l").mouseleave(function() {
    if (hover==true) {
        $("body").css("background", "white");
        hover=false;
    }
})
