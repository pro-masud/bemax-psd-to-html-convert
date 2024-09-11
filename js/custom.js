$(document).ready(function(){
    $('.item').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        animateOut: 'fadeOut',
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:1
            }
        }
    });

    $('.project-wrapper').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        animateOut: 'fadeOut',
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            578:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:4
            },
        }
    });

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
      });
});