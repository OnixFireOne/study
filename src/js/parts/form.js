export default function from(){

    let $conteiner = $('.form-contact');
    let $form = $('.form-contact > form');
    let $input = $('.in-email > input');
    let $text = $('.in-text > textarea');
    let $button = $('.button-form');
    let $error = $('.error-form');
    let $seccess = $('.success-form')

    $button.on('click', e=>{
        $form.submit();
    });

    $form.on('submit', e=>{
        e.preventDefault();

        if(!validateEmail($input.val())){
            console.log('error');
            $error.removeClass('visible-none');
            $input.addClass('error-input');
            return false;
        }
        console.log('send');
        $error.addClass('visible-none');
        $form.addClass('visible-none');
        $button.addClass('visible-none');
        $seccess.removeClass('visible-none');
    });

    function validateEmail(email) {
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(email).toLowerCase());
    }
}
