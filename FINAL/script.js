var summer =["what","waves", "elements", "we", "swim", "when","ocean", "park", "water", "boat", "people", "dry", "sound", "summer", "play", "forest", "school", "outside", "light", "bright", "sea", "sail", "sun", "electric", "fish", "sand", "fire"];
var spring =["people", "new", "sound", "air", "food", "plant", "tree", "earth", "life", "grow", "river", "birds", "red", "warm", "beautiful", "outside", "soil", "spring", "garden", "seeds", "insects", "park", "create", "rose", "elements", "we"];
var fall =["time", "people", "down", "sound", "old", "few", "miss", "leave", "color", "piece", "fall", "wood", "fire", "dry", "brown", "cool", "elements", "we", "outside", "what"];
var winter =["time", "long", "hard", "night", "winter", "ice", "snow", "elements", "wind", "white", "low", "hours", "black", "covered", "hold", "step", "north", "slowly", "cold", "rest", "we", "create", "people","when","what"];

var seasons =[summer, spring, fall, winter];

var currentseason = false;
var click = true;


//this allows the sounds to come through
$(".word").mouseenter(function() {
    var mysound = "sounds/" + $(this).html() + ".mp4";
    var audio = new Audio(mysound);
    audio.play();
});
 //getting the image to work and show only when words appear
$(".symbol1").hide();
$(".symbol2").hide();
$(".symbol3").hide();
$(".symbol4").hide();

$(".summer").click(function(){//easier way
    $(".word").each(function() {
    $(this).html(summer[Math.floor(Math.random()*summer.length)]);
    $(".symbol1").show();
         if (click==true) {
                 $(".season").hide();
             currentseason = summer;
            
            if (click==true) {
                $(".season").hide();
         
           }
         }
    $("body").css("background", "#ffff4d");
    console.log("hello");
  });
});

$(".spring").click(function(){
  $(".word").each(function() {
  $(this).html(spring[Math.floor(Math.random()*spring.length)]);
  $(".symbol2").show();
      if (click==true) {
          $(".season").hide();
          currentseason = spring;
   
       if (click==true) {
         $(".season").hide();
    
       }
    }
    $("body").css("background", "#ccff99");
    console.log("hey");
    });
});

//
$(".fall").click(function(){
    currentseason = fall;
    $(".word").each(function() {
    $(this).html(fall[Math.floor(Math.random()*fall.length)]);
    $(".symbol3").show();
        if (click==true) {
              $(".season").hide();
              currentseason = spring;
    
         if (click==true) {
             $(".season").hide();
    
             }
          }
        $("body").css("background", "#ff8000");
        console.log("hi");
    });
});

$(".winter").click(function(){
    currentseason = winter;
    $(".word").each(function() {
    $(this).html(winter[Math.floor(Math.random()*winter.length)]);
    $(".symbol4").show();
        if (click==true) {
              $(".season").hide();
              currentseason = spring;
    
         if (click==true) {
             $(".season").hide();
    
          }
        }
        $("body").css("background", "#99d6ff");
        console.log("hola");
    });  
});
//
////document.getElementById("birds").play();
//   
$("body").keypress(function(e) {
    console.log(e);
    if(e.keyCode == 32) {
        
        currentseason = seasons[Math.floor(Math.random()*seasons.length)]; //an array within an array
        
       console.log("you hit spacebar");
         
          if (currentseason == summer) {
              $("body").css("background", "#ffff4d");
              $(".symbol1").show();
              $(".symbol2").hide();
              $(".symbol3").hide();
              $(".symbol4").hide();
          }
          if (currentseason == spring) {
              $("body").css("background", "#ccff99");
              $(".symbol1").hide();
              $(".symbol2").show();
              $(".symbol3").hide();
              $(".symbol4").hide();
          }
          if (currentseason == fall) {
              $("body").css("background", "#ff8000");
              $(".symbol1").hide();
              $(".symbol2").hide();
              $(".symbol3").show();
              $(".symbol4").hide();
          }
          if (currentseason == winter) {
              $("body").css("background", "#99d6ff");
              $(".symbol1").hide();
              $(".symbol2").hide();
              $(".symbol3").hide();
              $(".symbol4").show();
          }
    }
    
    console.log("season");  //how do I get an array to work within an array?^^^

     $(".word").each(function() {
  $(this).html(currentseason[Math.floor(Math.random()*currentseason.length)])
});

});
