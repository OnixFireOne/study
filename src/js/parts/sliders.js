function initSliderFirst() {
    $('.slider-for').slick({
        centerMode:true,
        slidesToShow:1,
        slidesToScroll:1,
        fade: true,
        arrows: true,
        centerPadding:'20px',
        infinite:false,
        waitForAnimate: false,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        vertical: true,
        arrows: false,
        focusOnSelect: true,
        waitForAnimate:false,
    });
}

function initSliderSecond() {
    $('.slider').slick({
        slidesToShow:3,
        slidesToScroll:1,
        adaptiveHeight:true,
        centerMode: false,
        arrows:true
    });
}


export default function initSliders() {
    initSliderFirst();
    initSliderSecond();
}
