$(document).ready(function(){
     // sticky
     $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
            $(".menuarea").removeClass("stikyadded");
        } else {
            $(".menuarea").addClass("stikyadded");
        }
    });
});