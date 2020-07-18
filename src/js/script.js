jQuery(document).ready(function($) {
    let $linkTheme = $('.swap');
    let $linkThemeData;

    $linkTheme.click(function (e) {
        $linkThemeData = $(e.target).data('theme-color');
        $('html').attr('data-theme', $linkThemeData);

        for(let i = 0;i<this.children.length;i++){
            this.children[i].classList.remove('active');
        }
        e.target.classList.add('active');

    });

});
