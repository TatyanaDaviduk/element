const swiper = new Swiper('.mySlider', {
    effect: "coverflow",   
    grabCursor: true,  
    centerSlides: true,
    slidesPerView: 1.5,
    coverflowEffect: {
        slideShadows: false,
        depth: 100,
        rotate:-2,
        modifier: -1,
        stretch: "-90%"
    },
      // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true, //включаем поддержку динамических буллетов, если не включить отобр все точки
        dynamicMainBullets: 2, //максимальное количество отображаемых буллетов
        //type: 'fraction', 1/5 2/5
    }


  
  });