$(document).ready(function () {
    $('.burger').click(function (event) {
        if ($('body').hasClass('open-burger')) {
            console.log('removeClass');
            $('body').removeClass('open-burger');
        } else {
            console.log('addClass');
            $('body').addClass('open-burger');
        }
    });


    $('.carousel').slick({
        infinite: false,
        arrows: false,
        slidesToShow: 3,
        centerPadding: '40px',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    slidesToShow: 1.8,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    slidesToShow: 1.2,
                }
            },
        ]
    });
});

const mediaQuery = window.matchMedia('(max-width: 992px)');
function handleTabletChange(e) {
    if (e.matches) {
        $('.inform-carousel').slick({
            infinite: false,
            arrows: false,
            slidesToShow: 3,
            centerPadding: '40px',
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        dots: true,
                        slidesToShow: 1.3,
                    }
                },

            ]
        })
    }
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);