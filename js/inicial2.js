//HOME
const swiperHome = new Swiper('.home-swiper', {

    direction: 'vertical',
    loop: true,
    speed:800,
    parallax: true,
    effect:'fade',
  
    pagination: {
      el: '.swiper-pagination',
      type:'fraction',

      formatFractionCurrent: (number) =>{return '0' + number},
      formatFractionTotal: (number) =>{return '0' + number}
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });