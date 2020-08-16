export function cartActive() {
    let $cart = $('.menu__cart');
    //console.log(localStorage);
    if(localStorage.length >= 1){
        $cart.find('.icon-cart__number').text(localStorage.length);
        $cart.find('.icon-cart__number').css('visibility','visible');
        $cart.removeClass('not-active');
    }else{
        $cart.addClass('not-active');
        $cart.find('.icon-cart__number').css('visibility','hidden');
        $cart.find('.icon-cart__number').text('0');
    }
}
