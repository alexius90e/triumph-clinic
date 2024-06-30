let factsSwiper = null;

let init = false;

function swiperMode() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 992px)');

  if (mobile.matches) {
    if (!init) {
      init = true;
      factsSwiper = new Swiper('.facts .swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 35,
        breakpoints: {
          320: {
            slidesPerView: 1.2,
          },
          480: {
            slidesPerView: 1.4,
          },
          576: {
            slidesPerView: 2,
          },
          700: {
            slidesPerView: 2.4,
          },
        },
        navigation: {
          nextEl: '.facts .button--next',
          prevEl: '.facts .button--prev',
        },
      });
    }
  } else {
    if (factsSwiper !== null) factsSwiper.destroy();
    init = false;
  }
}

window.addEventListener('load', function () {
  swiperMode();
});

window.addEventListener('resize', function () {
  swiperMode();
});
