$(window).on('load', function() {

	jQuery('.sf-menu').superfish();

     $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(600).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(600).css({
            'overflow': 'visible'
        });


	$('.slide-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        responsiveClass: true,
        
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },
            600: {
                    items: 1,
                    dots: false,
                    nav: false
                },
                1000: {
                    items: 1,
                    dots: false,
                    nav: false,
                    loop: true
                }
        }
    });

    $('.slide-carousel').on('translate.owl.carousel', function () {
        $('.this-item h2').removeClass('fadeInUp animated').hide();
        $('.this-item h3').removeClass('fadeInUp animated').hide();
        $('.this-item p').removeClass('fadeInUp animated').hide();
    });

    $('.slide-carousel').on('translated.owl.carousel', function () {
        $('.this-item h2').addClass('fadeInUp animated').show();
        $('.this-item h3').addClass('fadeInUp animated').show();
        $('.this-item p').addClass('fadeInUp animated').show();
    });

  $('.testmonial-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        responsiveClass: true,
        
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },
            600: {
                    items: 1,
                    dots: false,
                    nav: false
                },
                1000: {
                    items: 1,
                    dots: false,
                    nav: false,
                    loop: true
                }
        }
    });

      $('.index-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        responsiveClass: true,
        
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },
            600: {
                    items: 1,
                    dots: false,
                    nav: false
                },
                1000: {
                    items: 1,
                    dots: false,
                    nav: false,
                    loop: true
                }
        }
    });
        $(".sf-menu").slicknav({
        delay:       1000,                            // one second delay on mouseout
        animation:   {opacity:'show', height:'show'},  // fade-in and slide-down animation
        speed:       'fast',                          // faster animation speed
        autoArrows:  false
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
  
}); 
 $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100){  
            $('.header').addClass("sticky");
            $('.scrollup').show();
        }
        else{
            $('.header').removeClass("sticky");
            $('.scrollup').hide();
        }
    });

$(document).ready(function(){

    //one click hide function

    $(".btn1").click(function(){    
        $(".hide1").toggle("");
    });

    $(".btn2").click(function(){    
        $(".hide2").toggle("");
    });

    $(".btn3").click(function(){    
        $(".hide3").toggle("");
    });
    $(".btn4").click(function(){    
        $(".hide4").toggle("");
    });
    
});
 
