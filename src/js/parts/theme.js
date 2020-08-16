export default function initTheme() {

    let $white = $('.white');
    let $item = $('.slider__item');
    let $header =  $('.wrapper');

    //$item.on('mouseover', chColor);

    function chColor(){
        if($white.hasClass('slick-active')) {
            $header.attr('data-theme','dark')
        }else{
            $header.attr('data-theme','light');
        }
    }

    $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        chColor();
    });


}
