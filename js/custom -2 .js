


$(window).on('load', function() {

	jQuery('.sf-menu').superfish();

	$('.slide-carousel').owlCarousel({
        loop: false,
        autoplay: false,
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

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
        
});
