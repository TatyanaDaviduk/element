new Swiper('.image-slider',{
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

        // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    //Буллеты
    clickable: true,
    dynamicBullets: true,
  },
  simulateTouch: false,
  breakpoints: {
    // when window width is >= 320px

    // when window width is >= 480px
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1400: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }

});