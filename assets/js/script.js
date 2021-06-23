$(document).ready(function(){
    $('#image-thumbnail .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    $("#slide a").click(function(){
         $(this).next().slideToggle(300);
         $(this).children(".pull-right").toggleClass("rotate")
    });


$(".hemburger").click(function(){
    $(this).toggleClass("active");
});

$(".hemburger").click(function(){
   $(".custom-nav-wrapper").toggleClass("open");
});

$(".hemburger").click(function(){
    $(".background").toggleClass("back");
});

$(".background").click(function(){
    $(this).removeClass("back")
    $(".hemburger").removeClass("active");
    $(".custom-nav-wrapper").removeClass("open");
});


$(window).scroll(function(){
    if($(window).scrollTop()>100){
        $(".navbars").addClass("fixed");
    }
    else{
        $(".navbars").removeClass("fixed");
    }
})
});