export default function from(){

    let $form = $('.form-contact > form');
    let $input = $('.in-email > input');
    let $text = $('.in-text > textarea');
    let $button = $('.button-form');

    $button.on('click', e=>{
        $form.submit();
    });

    $form.on('submit', e=>{
        e.preventDefault();

        if(validateEmail($input.val())){
            console.log('send');
            return false
        }
        console.log('error');
    });

    function validateEmail(email) {
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(email).toLowerCase());
    }
}
