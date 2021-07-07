;(function () {

    'use strict';

    var wowAnimation = function() {
        var wow = new WOW(
            {
                animateClass: 'animated',
                offset:       150,
                callback:     function(box) {
                    return;
                    console.log("WOW: animating <" + box.tagName.toLowerCase() + ">");
                }
            }
        );
        wow.init();
    };


    (function($) {
        wowAnimation();
        // videoByDevice();
    })(jQuery);

    function videoByDevice() {
        var video = $('#mainVideo');
        var vid = $('.vid');

        console.log(vid.attr('src'));
        $("#heroVideo").append("qwerty");
        var WindowWidth = $(window).width();
        video.innerHTML = "<source src='/images/paikam_video_mobil.mp4' type='video/mp4' >";
        if (WindowWidth < 1200) {
            //It is a small screen
            console.log('Menos de 1200');
            
            $('#heroVideo').append("<source src='/images/paikam_video_mobil.mp4' type='video/mp4' >");
        } else {
            //It is a big screen or desktop
            console.log('mas de 1200');
            $('#heroVideo').append("<source src='/images/paikam_video.mp4' type='video/mp4' >");
        }
    }

}());