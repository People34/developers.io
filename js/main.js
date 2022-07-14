$(function () {
    $('.develops__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrow: true,
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/prev.svg"></img>',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/next.svg"></img>',
    });


});

$('.head').click(function () {
    $(this).toggleClass('active');
    $(this).parent().find('.accordion__img').toggleClass('accordion__img-animate');
    $(this).parent().find('.content').slideToggle(180);
});
