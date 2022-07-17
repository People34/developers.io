$(function () {
  $('.develops__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrow: true,
    appendArrows: '.container__arrow',
    prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/prev.svg"></img>',
    nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/next.svg"></img>',
    responsive: [
      {
        breakpoint: 885,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/prev.svg"></img>',
          nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/next.svg"></img>',
        }
      },
      {
        breakpoint: 785,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/prev.svg"></img>',
          nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/next.svg"></img>',
        }
      }
    ]
  });


});





var init = {
  // autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 3,
  slidesPerRow: 1,
  arrow: true,
  appendArrows: '.arrow-container',
  prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/prev.svg"></img>',
  nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/next.svg"></img>',
};


$(function () {
  var win = $(window);
  var slider = $('.example__galery');

  win.on('load resize', function () {
    if (win.width() < 885) {
      slider.not('.slick-initialized').slick(init);
    } else if (slider.hasClass('slick-initialized')) {
      slider.slick('unslick');
    }
  });
});





$('.head').click(function () {
  $(this).toggleClass('active');
  $(this).parent().find('.accordion__img').toggleClass('accordion__img-animate');
  $(this).parent().find('.content').slideToggle(180);
});


const menu = document.querySelector(".hamburger-menu__list");
const menuItems = document.querySelectorAll(".hamburger-menu__item-link");
const hamburger = document.querySelector(".hamburger");
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
