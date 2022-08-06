$(document).ready(function () {

    //aos animate
    AOS.init();

    
    //coupon close 클릭 후 slideup
    $(".coupon_close").click(function () {
        $(".coupon").slideUp(150);
    });


    //coupon close 클릭 후 body 올리기
    $(".coupon_close").click(function () {
        if($(".header").scrollTop(0)) {
            $("body").animate({
                "margin-top": "-45px"
            }, 160);
        }
    })


    //gnb animate
    $(".gnb_list_warpper").hover(function () {
        $(".gnb_bg").stop().animate({
            height: 300
        }, 200)
        $(this).find(".gnb_list_container").stop().animate({
            height: 300
        }, 300)
    }, function () {
        $(".gnb_list_container").stop().animate({
            height: 0
        }, 50)
        $(".gnb_bg").stop().animate({
            height: 0
        }, 300)
    })


    //main_swiper
    var swiper = new Swiper(".main_banner .main_swiper", {
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".main_banner .swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    //recipe_swiper
    var swiper = new Swiper(".recipe_item .recipe_swiper", {
        loop: true,
        pagination: {
            el: ".recipe_item .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    //best_keyword 탭메뉴
    $(".keyword_list").click(function(){
        const idx = $(this).index();

        $(".menu_item").removeClass("active");
        $(".menu_item").eq(idx).addClass("active");

        $(".keyword_list").removeClass("active");
        $(".keyword_list").eq(idx).addClass("active");
    })


    //familysite_btn
    $(".familysite_btn").click(function () {

        const cnt = $(".content_list").length;

        if($(".familysite_content_wrapper").height() == 0) {
            $(".familysite_content_wrapper").stop().animate({
                height: cnt * 52
            },100)
        }else {
            $(".familysite_content_wrapper").stop().animate({
                height: 0
            },100)
        }
    })


    // familysite_btn 숨기기
    $(document).on('click', function() {
        if(!$(event.target).hasClass("familysite_btn")) {
        $(".familysite_content_wrapper").stop().animate({
            height: 0
        },100)
        }
    })
})