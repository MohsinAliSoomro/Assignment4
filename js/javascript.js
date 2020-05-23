$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:20,
        autoplay:true,
        dots:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:4,
            },
            1000:{
                items:6,                
            }
        }
    });

  });