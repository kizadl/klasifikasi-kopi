(function ($) {
    "use strict";

    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 100) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    /* -----------------------------------------
        fact counter
    ----------------------------------------- */
    $('.counter').counterUp({
        delay: 15,
        time: 2000
    });

    /*-------------------------------------------------
        wow js init
    --------------------------------------------------*/
    new WOW().init();

    /**banner-move**/
        function touches(e){
            var x = e.touches ? e.touches[0].clientX : e.clientX, 
                    y = e.touches ? e.touches[0].clientY : e.clientY;
          var w = window.innerWidth / 2;
          var h = window.innerHeight / 2;
          
          var l = -(x - w) / (w / 1) - 1;
          var t = -(y - h) / (h / 1) - 1;
              //10 / (y - (h / 2)) * 10;             
          console.log(y + ' | ' + h + ' | ' + t);
          
            TweenMax.to($('.banner-animate-image'), 1, {
                top: t + "%",
                left: l + "%"
            });
            
        }
        
        window.addEventListener("mousemove", touches);
        window.addEventListener("touchstart", touches);
        window.addEventListener("touchmove", touches);


    /*--------------------------------------------------------
        video popup 
    --------------------------------------------------------*/
    $('.video-play-btn,.video-popup,.small-vide-play-btn').magnificPopup({
            type: 'iframe',
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });
        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/Wimkqo8gDZ0'
                    }
                }
            }
        });
    
    /*------------------
        back to top
    ------------------*/
    var btn = $('#back-to-top');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });

    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });

})(jQuery);
