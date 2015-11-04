$(".button").html("hello world");
//example below
//var cats = ["img/cat1jpg","img/cat2.jpg","img/cat3.jpg""img/cat4.jpg"];

//math.floor(Math.random()*4)
//$("body").append("<img src='img/cat1.jpg"); --> shows in console the randomness of img
//$("body").append("<img src='" + randomcat+ "'>"); // random shows on the page, double string " '' "


//create loop to make multiple buttons
for (var increment = 0; increment < 100; increment++ ){
    $("body").append('<div class="button"></div>')
}


$("body").append('<div class="button></div>');

var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";//shows in console
var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";//put window w/h so that it will go to the whole window instead of a limited box
//follw order of operations

    //to make it easier
//function makePattern {
    //put pattern of size and color in here
//}
//$(".activate").click(functiom(){
//    makePattern();
//});

    //for poem
//make a loop that appends 5 times
for(var myPoem = 0; myPoem<5; myPoem++){
    $(".poem").append(words[Math.floor(Math.random()*words.length)+ " "]);
}



//$(".button").css("top", topPosition).css("left",leftPosition);//works on page
$(window).resize(function(){
//loop fro jquery that runs 100 times, this refurs back to element being re-iteraterated
    $(".button").each(function () {
        var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
        var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";
        $(this).css("top", topPosition).css(leftPosition, "200px");
       
        //'#' + Math.floor(Math.random()*16777215).toString(16); //for different hex value
        //$(this).css("background-color", newcolor) // color
            
            //To change size - below example
        //var newSize = Math.floor(Math.random()*300) + "px";
        //$(this).css("width", newSize);
        
    })
})