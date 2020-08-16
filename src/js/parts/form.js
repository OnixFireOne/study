import {cartActive} from "./functions";
export default function form(){
    function formInItem(){
        let $button = $('.form__button .button-i__item');
        let $input = $('.form__item .custom-radio');
        let $title = $('.item__title');
        let $price = $button.find('span:first-child');

        $('.form > form').on('submit', e=>{
            e.preventDefault();
            let obg = {title:$title.find('h2').text(),price:$price.text(),subtitle:$title.find('span').text()};
            $input.find('input:radio:checked').each(function (e) {
                if(e==0)obg.color=$(this).val();
                if(e==1)obg.size=$(this).val();
            });

            let c = localStorage.length + 1;
            localStorage['card_'+ c]=JSON.stringify(obg);

            cartActive();

        });
    }


    function validateEmail(email) {
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(email).toLowerCase());
    }
    function validateTel(tel) {
        let re = /^[+7]\d[\d\(\)\ -]{4,14}\d$/;
        return re.test(String(tel).toLowerCase());
    }
    function check(what,element) {
        let $button = $('.button-i__item');
        if(what == 'mail') {
            if (!validateEmail(element.val())) {
                console.log('error');
                element.find('+span').removeClass('visible-none');
                element.addClass('error-input');
                $button.attr('disabled','disabled');

            } else {
                console.log('send');
                element.find('+span').addClass('visible-none');
                element.removeClass('error-input');
                $button.removeAttr('disabled');


            }
        }
        if(what == 'tel'){
            if (!validateTel(element.val())) {
                console.log('error');
                element.find('+span').removeClass('visible-none');
                element.addClass('error-input');
                $button.attr('disabled','disabled');
            } else {
                console.log('send');
                element.find('+span').addClass('visible-none');
                element.removeClass('error-input');
                $button.removeAttr('disabled');
            }
        }
    }

    function formInCheckout() {
        let $form = $('.form-ch__main');
        let $input = $('.form-ch__item');

        $input.find('input').on('change',e=>{
            check('mail',   $input.find('input[type="mail"]'));
            check('tel',    $input.find('input[type="tel"]'));
        });

        $form.on('submit', e=>{
            localStorage.clear();
            window.open('checkout-complete.html');
            e.preventDefault(true);

        });
    }

    if($('.item__form >').hasClass('form')){
        formInItem();
    }
    if($('.checkout__form >').hasClass('form-ch__main')){
        formInCheckout();
    }
}
