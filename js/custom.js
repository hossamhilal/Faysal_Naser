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

    // Scroll Menu
    $('.mainMenu a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top 
        }, 1200, 'linear');
        $('.mainMenu li').removeClass('active');
        $(this).parent().addClass('active');
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


    // Upload File 
    // const actualBtn = document.getElementById('actual-btn');

    // const fileChosen = document.getElementById('file-chosen');

    let input = $('.upload').find('input');

    $(input).on('change', function(){
        console.clear();
        console.log('======== Changed =============');
        let file = $(this)[0].files[0].name;
        console.log(file)
        let fileName = $(this).parents('.upload').find('.fileName');
        $(fileName).text(file);
    });

    // actualBtn.addEventListener('change', function(){
    // fileChosen.textContent = this.files[0].name
    // })





    // iniat WOW Js
    new WOW().init();
   
})(jQuery);

