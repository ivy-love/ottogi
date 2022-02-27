$(document).ready(function () {

    //aos animate
    AOS.init();

    //header__top--btn
    $(".coupon_close").click(function () {
        $(".coupon").slideUp(150);
    });

    //header__top--btn 클릭 후 body 올리기
    $(".coupon_close").click(function () {
        if ($(".header").scrollTop(0)) {
            $("body").animate({
                "margin-top": "-45px"
            }, 160);
        }
    })

    //gnb
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

    //best_keyword
    $(".keyword_list").click(function () {
        idx = $(this).index() + 1;

        $(".menu_item").removeClass("active")
        $("#a" + idx).addClass("active")

        $(".keyword_list").removeClass("active")
        $(this).addClass("active")
    })

    //familysite_btn
    $(".familysite_btn").click(function () {
        cnt = $(".familysite_content_wrapper .content_list").length;
        if ($(".familysite_content_wrapper").height() == 0) {
            $(".familysite_content_wrapper").stop().animate({
                height: cnt * 52
            }, 100)
        } else {
            $(".familysite_content_wrapper").stop().animate({
                height: 0
            }, 100)
        }
    })
})