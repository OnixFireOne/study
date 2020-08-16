export default function initContent() {

    function cartActive() {
        if(localStorage.length <= 1){
            $cart.find('.icon-cart__number').text(localStorage.length);
            $cart.removeClass('non-active');
        }
    }

    function scroll($element) {
        $element.addClass('scroll-js');
        $element.css('position','relative');
        let $child = $element.children(0);
        $child.scroll(function (e) {
            $element.addClass('active_scroll');
            if ($child.scrollLeft() <= 2) $element.removeClass('active_scroll');
        })
    }

    if($('.form__table >').hasClass('form-table')){
        scroll($('.form-table'));
    }
    if($('.slider-nav__inner').hasClass('slick-slider')){
        scroll($('.slider-nav__inner .slick-list.draggable'));
    }

}

