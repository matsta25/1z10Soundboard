var musicTrue = document.getElementById("trueSound");
var musicFalse = document.getElementById("falseSound");

function playTrue(){
    musicTrue.play();
    console.log("true playing");
}

function playFalse(){
    console.log("false playing");
    musicFalse.play();
}

$(document).keypress(function(event){
    if( event.which == '116' )
    playTrue();
    if( event.which == '102' )
    playFalse();
});