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
    console.log("works")
});

$("#studio").mouseenter(function(){
    $("#work").show();
    console.log("studio work")
});

$("#lab").mouseenter(function(){
    $("#stuff").show();
    console.log("lab work")
});