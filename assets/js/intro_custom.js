$(document).ready(function () {

    $(window).scroll(function() {

        if($(window).scrollTop()){
            $('.title-wrap').addClass('active');
        }else{
            $('.title-wrap').removeClass('active');
        }

    })

    //bg-txt scroll magic
    // var controller = new ScrollMagic.Controller();

    // var tween1 = TweenMax.to('.bg-txt', 0.5, {
    //     left: -1500,
    // });
    
    // var scene = new ScrollMagic.Scene({
    //     triggerElement: ".design",
    //     duration: "100%"
    // })
    //     .setTween(tween1)
    //     .addTo(controller)



});