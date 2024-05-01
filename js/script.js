new Swiper('.image-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  grabCursor: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  autoHeight: true,

  slidesPerView: 4,

  spaceBetween: 7,

  slidesPerGroup: 1,

  initialSlide: 0,

  loop: true,

  loopedSlides: 1,

  autoplay: {
    delay: 3000,
  },

  speed: 600,

  breakpoints: {
    '@0.50': {
      slidesPerView: 2,
    },
    '@1.00': {
      slidesPerView: 3,
    },
    '@1.50': {
      slidesPerView: 4,
    },
  },

});