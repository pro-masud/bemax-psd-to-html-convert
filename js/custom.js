$(document).ready(function(){
    $('.item').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        animateOut: 'fadeOut',
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            }
        }
    })
});