/*global $ */
(function($) {
    "use strict";

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function(){
        $(this).toggleClass('open');
        $('.mainMenu').toggleClass('opend');
        $('.navOverlay').toggleClass('opend');  
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });

    // CLOSE SIDE MENU 
    $('.navOverlay').on('click', function(){
        $(this).removeClass('opend');
        $('.mainMenu').removeClass('opend');  
        $('.menuBtn').removeClass('open');
        $('body').removeClass('stopScroll');  
    });

    // Check if Rtl 
    var rtlVal = true ;   
    $('body').hasClass('en') ? rtlVal = false : rtlVal = true;

    // Header OWL 
    $('.owlHeader').owlCarousel({
        rtl: rtlVal,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: false,
        dots: false,
        autoplaySpeed : 2000,
        autoplayTimeout : 2000,
        smartSpeed: 2000 ,
        navText: ["<i class='icofont-long-arrow-right'></i>", "<i class='icofont-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    // Header OWL 
    $('.owlParteners').owlCarousel({
        rtl: rtlVal,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: false,
        dots: false,
        autoplaySpeed : 2000,
        autoplayTimeout : 2000,
        smartSpeed: 2000 ,
        navText: ["<i class='icofont-long-arrow-right'></i>", "<i class='icofont-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });

    

    // // INPUT FOCUS ANIMATION 
    // $('.inputField input').focus(function(){
    //     $(this).parent('.inputField').addClass('focused');
    // });

    // $('.inputField input').each(function() { 
    //     if ($(this).val() != "") {
    //         $(this).parent('.inputField').addClass('focused');   
    //     }
    // });

    // $('.inputField input').focusout(function(){
    //     if($(this).val() === "")
    //     $(this).parent('.inputField').removeClass('focused');
    // });

    // iniat WOW Js
    new WOW().init();
   
})(jQuery);

