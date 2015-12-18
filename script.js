$("#sound").hide();
$("#work").hide();
$("#studio").hide();
$("#lab").hide();
$("#stuff").hide();

$("#fav").mouseenter(function(){
    $("#sound").show();
    $("#studio").show();
    $("#lab").show();
    $("#work").hide();
    $("#stuff").hide();
    console.log("works")
    $("body").css('background', '#ffffff')
});

$("#studio").mouseenter(function(){
    $("#work").show();
    console.log("studio work")
});

$("#lab").mouseenter(function(){
    $("#stuff").show();
    console.log("lab work")
});