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
    })
});