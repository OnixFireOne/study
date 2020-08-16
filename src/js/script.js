import initTheme from "./parts/theme";
import initSliders from "./parts/sliders";
import initContent from "./parts/content";
import form from "./parts/form";
import InitHeader from "./parts/header";
jQuery(document).ready(function($) {
    initTheme();
    initSliders();
    // initPopup();
    form();
    InitHeader();
    initContent();

});
