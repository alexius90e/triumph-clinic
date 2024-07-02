let factsSwiper = null;
let whyProgramSwiper = null;
let socializationSwiper = null;

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

      whyProgramSwiper = new Swiper('.why-program .swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
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
          nextEl: '.why-program .button--next',
          prevEl: '.why-program .button--prev',
        },
      });

      socializationSwiper = new Swiper('.socialization .swiper', {
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
            slidesPerView: 1.75,
          },
          700: {
            slidesPerView: 2,
          },
        },
        navigation: {
          nextEl: '.socialization .button--next',
          prevEl: '.socialization .button--prev',
        },
      });
    }
  } else {
    if (factsSwiper !== null) factsSwiper.destroy();
    if (whyProgramSwiper !== null) whyProgramSwiper.destroy();
    if (socializationSwiper !== null) socializationSwiper.destroy();
    init = false;
  }
}

window.addEventListener('load', function () {
  swiperMode();
});

window.addEventListener('resize', function () {
  swiperMode();
});


const reviewsSwiper = new Swiper('.reviews .swiper', {
  slidesPerView: 1,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 1.3,
    },
    576: {
      slidesPerView: 1.5,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    992: {
      spaceBetween: 35,
      slidesPerView: 2.5,
    },
  },
  navigation: {
    nextEl: '.reviews .button--next',
    prevEl: '.reviews .button--prev',
  },
});

const conditionsThumbsSwiper = new Swiper(".conditions__sliders-thumbs .swiper", {
  spaceBetween: 16,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});

const conditionsSwiper = new Swiper(".conditions__sliders-main .swiper", {
  spaceBetween: 20,
  navigation: {
    nextEl: ".conditions__sliders .button--next",
    prevEl: ".conditions__sliders .button--prev",
  },
  thumbs: {
    swiper: conditionsThumbsSwiper,
  },
});