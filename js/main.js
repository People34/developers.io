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


const menu = document.querySelector(".hamburger-menu__list");
const menuItems = document.querySelectorAll(".hamburger-menu__item-link");
const hamburger= document.querySelector(".hamburger");
const menuIcon = document.querySelector(".hamburger-img");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
