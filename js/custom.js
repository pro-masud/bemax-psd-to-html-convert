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
                items:1,
                margin: 20
            },
            578:{
                items:2,
                margin: 20
            },
            768:{
                items:3,
                margin: 20
            },
            992:{
                items:4,
                margin: 20
            },
            1200:{
                items:5,
                margin: 20
            },
        }
    });

    $('.client-wrapper').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        animateOut: 'fadeOut',
        margin:50,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            578:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            },
        }
    });

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
      });
});