$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,

    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 525,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]


});

$('.timer').startTimer({
    loop: true,
    loopInterval: 3
});

$('.order-form_phone').on('input', function () {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});

$(document).ready(function () {
    $(".form-input").focus(function () {
        $(this).next('div.order-form_help').fadeIn(500);
    });

    $(".form-input").blur(function () {
        $(this).next('div.order-form_help').fadeOut(300);
    });
});

$(document).ready(function () {
    $("button.section__hero-btn-order").on('click', function (event) {
        var hash = $(this).data("hash");
        if (hash) {
            $('html, body').animate({
                scrollTop: $(document.getElementById(hash)).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

$(document).ready(function () {
    $('.menu-burger__header').click(function () {
        $('.menu-burger__header').toggleClass('open-menu');
    });
});