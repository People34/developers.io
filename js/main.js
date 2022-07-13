$(function () {
    $('.case__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrow: true,
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="img/prevArrow.png"></img>',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="img/nextArrow.png"></img>',
    });


    $('.materials__slider').slick({
        arrows: false, 
        dots: true,   
    })



});

$('.head').click(function () {
    $(this).toggleClass('active');
    $(this).parent().find('.accordion__img').toggleClass('accordion__img-animate');
    $(this).parent().find('.content').slideToggle(180);
});
