import {cartActive} from "./functions";
export default function InitHeader (){
    let $m = $('.menu');
    let $list = $('.menu__list');

    $list.scroll(function (e) {
        $m.addClass('menu__active');
        if($list.scrollLeft()<=2)$m.removeClass('menu__active');

    });
        cartActive();
}
