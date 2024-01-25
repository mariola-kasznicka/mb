$(".footer-menu-item" ).on("click", function() {
    $(this).toggleClass("show");
});

$("#mobileMenuToggler" ).on("click", function() {
    $("body").toggleClass("no-scroll");
});

$(document).ready(function(){
    initBxSlider()

    $(window).on( "resize", function() {
        initBxSlider()
    });
});

function initBxSlider(){
    if($(window).width() >= 1280) {
        $('.bxslider.mb-slider').bxSlider({
            pager: false,
            minSlides: 4,
            maxSlides: 4,
            slideWidth: 5000,
            slideMargin: 32,
            moveSlides: 1,
            nextText: '',
            prevText: '',
            onSliderResize: function() {
                if($(window).width() < 1280) {
                    this.destroySlider()
                }

            }
        });
    }
}

