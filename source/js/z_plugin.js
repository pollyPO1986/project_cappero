if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $('.selectpicker').selectpicker('mobile');
}

(function($) {
    //- 日期
    $('#datetimepicker').datetimepicker({
        locale: 'zh-tw',
        format: 'YYYY/MM/DD',
        useCurrent: false,
        icons: {
            next: "fa fa-chevron-right",
            previous: "fa fa-chevron-left"
        }
    });

    //- owl carousel
    // 午餐-五個主餐
    $('.meals').owlCarousel({
        margin: 15,
        responsive: {
            0: {
                items: 2,
                nav: true,
        				dots: false,
                center: true,
        				loop: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ]

            },
            768: {
                items: 5,
                nav: false,
                loop: false
            }
        }
    })

    // 晚餐-3個主餐
    $('.dinner').owlCarousel({
        margin: 15,
        responsive: {
            0: {
                items: 2,
                nav: true,
        				dots: false,
                center: true,
        				loop: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ]

            },
            768: {
                items: 3,
                nav: false,
                loop: false
            }
        }
    })
})(jQuery);