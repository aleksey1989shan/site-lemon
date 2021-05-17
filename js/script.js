$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots:true,
    });
});
$(document).ready(function () {
    $('.heder_burger').click(function (event) {
        $('.heder_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});