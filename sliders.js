$(document).ready(function () {
  // Konfigurační data pro každý slider
  var sliders = [
    {
      wrapperClass: "slider-wrapper-jedna",
      slideClass: "slider-item-jedna",
      navigation: {
        nextEl: '.next-slide-jedna',
        prevEl: '.prev-slide-jedna'
      },
      pagination: {
        type: 'bullets',
        el: '.pagination-jedna',
        clickable: true,
      },
      autoplay: {
        delay: 3500,
      },
      speed: 700,
      slidesPerView: 'auto',
      loop: false,
    },
    // Zde přidejte konfigurační data pro další slidery podobným způsobem
    {
      wrapperClass: "slider-wrapper-dva",
      slideClass: "slider-item-dva",
      navigation: {
        nextEl: '.next-slide-dva',
        prevEl: '.prev-slide-dva'
      },
      pagination: {
        type: 'bullets',
        el: '.pagination-dva',
        clickable: true,
      },
      autoplay: {
        delay: 3500,
      },
      speed: 700,
      slidesPerView: 'auto',
      loop: false,
    },
    {
      wrapperClass: "slider-wrapper-tri",
      slideClass: "slider-item-tri",
      navigation: {
        nextEl: '.next-slide-tri',
        prevEl: '.prev-slide-tri'
      },
      pagination: {
        type: 'bullets',
        el: '.pagination-tri',
        clickable: true,
      },
      autoplay: {
        delay: 3500,
      },
      speed: 700,
      slidesPerView: 'auto',
      loop: false,
    },
    {
      wrapperClass: "slider-wrapper-ctyri",
      slideClass: "slider-item-ctyri",
      navigation: {
        nextEl: '.next-slide-ctyri',
        prevEl: '.prev-slide-ctyri'
      },
      pagination: {
        type: 'bullets',
        el: '.pagination-ctyri',
        clickable: true,
      },
      autoplay: {
        delay: 3500,
      },
      speed: 700,
      slidesPerView: 'auto',
      loop: false,
    },
   {
      wrapperClass: "slider-wrapper-pet",
      slideClass: "slider-item-pet",
      navigation: {
        nextEl: '.next-slide-pet',
        prevEl: '.prev-slide-pet'
      },
      pagination: {
        type: 'bullets',
        el: '.pagination-pet',
        clickable: true,
      },
      autoplay: {
        delay: 3500,
      },
      speed: 700,
      slidesPerView: 'auto',
      loop: false,
    },
   {
      wrapperClass: "slider-wrapper-sest",
      slideClass: "slider-item-sest",
      navigation: {
        nextEl: '.next-slide-sest',
        prevEl: '.prev-slide-sest'
      },
      pagination: {
        type: 'bullets',
        el: '.pagination-sest',
        clickable: true,
      },
      autoplay: {
        delay: 3500,
      },
      speed: 700,
      slidesPerView: 'auto',
      loop: false,
    },
  ];

  // Inicializace sliderů pomocí cyklu
  for (var i = 0; i < sliders.length; i++) {
    var slider_wrapper = new Swiper("." + sliders[i].wrapperClass, {
      wrapperClass: sliders[i].wrapperClass,
      slideClass: sliders[i].slideClass,
      navigation: sliders[i].navigation,
      pagination: sliders[i].pagination,
      autoplay: sliders[i].autoplay,
      speed: sliders[i].speed,
      slidesPerView: sliders[i].slidesPerView,
      loop: sliders[i].loop,
      on: {
        init: function () {
          var swiper_pagination_bulletwe_style = document.createElement('style');
          swiper_pagination_bulletwe_style.type = 'text/css';
          swiper_pagination_bulletwe_style.innerHTML =
            ` .swiper-pagination-bullet{ background:#000099;
             margin-right:8px;
             transition:.2s;
             } `;
          document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bulletwe_style);
          var swiper_pagination_bullethoverwe_style = document.createElement('style');
          swiper_pagination_bullethoverwe_style.type = 'text/css';
          swiper_pagination_bullethoverwe_style.innerHTML =
            ` .swiper-pagination-bullet:hover{ opacity:.7;
             } `;
          document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullethoverwe_style);
          var swiper_pagination_bullet_activehoverwe_style = document.createElement('style');
          swiper_pagination_bullet_activehoverwe_style.type = 'text/css';
          swiper_pagination_bullet_activehoverwe_style.innerHTML =
            ` .swiper-pagination-bullet-active:hover{ opacity:1;
             } `;
          document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullet_activehoverwe_style);
          var swiper_pagination_fractionwe_style = document.createElement('style');
          swiper_pagination_fractionwe_style.type = 'text/css';
          swiper_pagination_fractionwe_style.innerHTML =
            ` .swiper-pagination-fraction{ font-size:16px;
             } `;
          document.getElementsByTagName('head')[0].appendChild(swiper_pagination_fractionwe_style);
        },
      },
    });
  }
});
