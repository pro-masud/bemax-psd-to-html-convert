$(document).ready(function(){
    $('.item').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        animateOut: 'fadeOut',
        nav:false,
        responsive:{
            0:{
                items:1
            }
        }
    })
});