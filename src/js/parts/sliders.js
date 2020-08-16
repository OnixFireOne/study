function initSliderFirst() {
    $('.slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        arrows: true,
        waitForAnimate: false,
    });
    // $('.slider-nav').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: false,
    //     vertical: true,
    //     arrows: false,
    //     focusOnSelect: true,
    //     waitForAnimate:false,
    // });
}

function initSliderSecond() {
    $('.slider-int').slick({
        slidesToShow:4,
        slidesToScroll:1,
        centerMode: false,
        arrows:true,
        variableWidth:false,
        responsive:[
            {
                breakpoint:425,
                settings:{
                    slidesToShow:1
                }
            }
        ]
    });
}

function initSliderItemNav() {
    $('.slider-card__main').slick({
        fade:true,
        arrows:false,
        draggable:false,
        swipe:false,
        asNavFor:'.slider-nav__inner',

    });

    $('.slider-nav__inner').slick({
        slidesToShow:4,
        arrows:false,
        variableWidth: true,
        responsive:[
            {
                breakpoint:425,
                settings:{
                    slidesToShow:3
                }
            }
        ],
        focusOnSelect:true,
        asNavFor:'.slider-card__main'
    })
}


export default function initSliders() {

    if($('.slider').hasClass('slider')){
        initSliderFirst();
    }
    if($('.interest__slider').hasClass('slider-int')){
        initSliderSecond();
    }
    if($('.item__slider').hasClass('slider-card')){
        initSliderItemNav();
    }

}
