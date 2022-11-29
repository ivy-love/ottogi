$(document).ready(function () {

    $(document).scroll(function() {

        //.title-wrap .txt-wrap opacity
        let scrollPos = $(this).scrollTop();
        $(".title-wrap .txt-wrap").css({
            opacity: 1 - scrollPos / 300
        });
    });
});