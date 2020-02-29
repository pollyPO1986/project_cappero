$('.menu_list > li > a').mouseenter(function() {
    // Immediatly load link in iPad etc (Double click necessary otherwise)
    var device = navigator.userAgent.toLowerCase();
    var ios = device.match(/(iphone|ipod|ipad)/);
    if (ios /*$("body").hasClass("no-touch")*/ ) {
        window.location = $(this).attr("href");
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#gotop').fadeIn("fast");
    } else {
        $('#gotop').stop().fadeOut("fast");
    }
    // var moHeight = $(window).scrollTop() + $(window).height();
    // var foHeight = $(document).height() - $("footer").height();
    // if ($('#gotop').length > 0) {
    //     if (moHeight < foHeight) {
    //         $('#gotop').removeClass('foo_top');
    //     } else {
    //         $('#gotop').addClass('foo_top');
    //     }
    // }
});
$(function() {
    //-Menu
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    //-go top
    $("#gotop").click(function() {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 1000);
    });

    //-tooltip
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })
});