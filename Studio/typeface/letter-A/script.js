//$("letter-wrapper").hover(function(){
//    $(".letter-wrapper").css("backgroundcolor", "red")
//});
//
var hover = false;

$(".letter-a").mouseenter(function() {
    if (hover==false) {
        console.log("HI!");
        $("body").css("background-image", "url(pattern2.gif)");
        hover=true;
    }
});
$(".letter-a").mouseleave(function() {
    if (hover==true) {
        $("body").css("background", "white");
        hover=false;
    }
})
