import initTheme from "./parts/theme";
import initSliders from "./parts/sliders";
import initPopup from "./parts/popup";
import from from "./parts/form";
jQuery(document).ready(function($) {
    initTheme();
    initSliders();
    initPopup();
    from();
});
