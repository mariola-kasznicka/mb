$(".footer-menu-item" ).on("click", function() {
    $(this).toggleClass("show");
});

$("#mobileMenuToggler" ).on("click", function() {
    $("body").toggleClass("no-scroll");
});