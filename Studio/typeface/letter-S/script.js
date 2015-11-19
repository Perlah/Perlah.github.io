//$("letter-wrapper").hover(function(){
//    $(".letter-wrapper").css("backgroundcolor", "red")
//});
//
var hover = false;
var gif=["s1.gif", "s2.gif", "s3.gif"];


$(".letter-s").mouseenter(function() {
    if (hover==false) {
        console.log("HI!");
        var randomgif = "url(" + gif[Math.floor(Math.random()*3)] + ")";
        $("body").css("background-image",randomgif);
        hover=true;
    }
});
$(".letter-s").mouseleave(function() {
    if (hover==true) {
        $("body").css("background", "white");
        hover=false;
    }
})
