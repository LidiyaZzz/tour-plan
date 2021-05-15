var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  //effect: "cube",
  // тащим слайды мышкой
  simulateTouch: true,
  // хватаем слайды 'лапкой'
  grabCursor: true,

  // Управление с клавиатуры
  //keyboard: {
 //   enabled: true,
  //  onlyInViewport: true,
 //   pageUpDown: true,
 // },

});

var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  //effect: "cube",
  // тащим слайды мышкой
  simulateTouch: true,
  // хватаем слайды 'лапкой'
  grabCursor: true,

  // Управление с клавиатуры
 // keyboard: {
 //   enabled: true,
 //   onlyInViewport: true,
//    pageUpDown: true,
//  },

});