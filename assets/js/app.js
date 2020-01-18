$(function () {

    /*Fixed nav
    ======================*/
    var header = $("#header"),
        headerH = $(header).innerHeight(),
        header__inner = $("#header__inner"),
        scrollOffset = $(window).scrollTop();


    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= headerH) {

            header.addClass("fixed");
            header__inner.addClass("padding");

        } else {
            header.removeClass("fixed");
            header__inner.removeClass("padding");
        }
    }

    /*Smooth scroll
    ======================*/
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("scroll"),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)

    })

    /*Nav toggle
    ======================*/
    $("#nav-toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    })

    /*Slider
    ======================*/
    $("[data-intro-slider]").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        arrows: false
    });

    $("[data-about-slider]").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        //dots: true,
        arrows: false,
        customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return "<a><div class='slick-div' >" + (i + 1) + "</div></a>";
        }
    });

    $("[data-cards-slider]").slick({

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })

    $('[data-slide]').on("click", function (event) {
        event.preventDefault();
        var slideNumber = $(this).data('slide');
        $('[data-slide]').removeClass("active");
        $(this).addClass("active");
        $('[data-about-slider]').slick('slickGoTo', slideNumber - 1);
    });

});