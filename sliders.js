$(document).ready(function () {
 var slider_wrapper = new Swiper(".slider-wrapper-jedna", {
 wrapperClass: "slider-list-jedna",
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

 on: {
 init: function () {
 var swiper_pagination_bulletwe_style = document.createElement('style'); swiper_pagination_bulletwe_style.type = 'text/css'; swiper_pagination_bulletwe_style.innerHTML =
 ` .swiper-pagination-bullet{ background:#000099;
 margin-right:8px;
 transition:.2s;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bulletwe_style);var swiper_pagination_bullethoverwe_style = document.createElement('style'); swiper_pagination_bullethoverwe_style.type = 'text/css'; swiper_pagination_bullethoverwe_style.innerHTML =
 ` .swiper-pagination-bullet:hover{ opacity:.7;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullethoverwe_style);var swiper_pagination_bullet_activehoverwe_style = document.createElement('style'); swiper_pagination_bullet_activehoverwe_style.type = 'text/css'; swiper_pagination_bullet_activehoverwe_style.innerHTML =
 ` .swiper-pagination-bullet-active:hover{ opacity:1;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullet_activehoverwe_style);var swiper_pagination_fractionwe_style = document.createElement('style'); swiper_pagination_fractionwe_style.type = 'text/css'; swiper_pagination_fractionwe_style.innerHTML =
 ` .swiper-pagination-fraction{ font-size:16px;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_fractionwe_style);
 },
 },
 });
 /* slider 2 */
 var slider_wrapper_zlin = new Swiper(".slider-wrapper-dva", {
 wrapperClass: "slider-list-dva",
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

 on: {
 init: function () {
 var swiper_pagination_bulletwe_style = document.createElement('style'); swiper_pagination_bulletwe_style.type = 'text/css'; swiper_pagination_bulletwe_style.innerHTML =
 ` .swiper-pagination-bullet{ background:#000099;
 margin-right:8px;
 transition:.2s;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bulletwe_style);var swiper_pagination_bullethoverwe_style = document.createElement('style'); swiper_pagination_bullethoverwe_style.type = 'text/css'; swiper_pagination_bullethoverwe_style.innerHTML =
 ` .swiper-pagination-bullet:hover{ opacity:.7;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullethoverwe_style);var swiper_pagination_bullet_activehoverwe_style = document.createElement('style'); swiper_pagination_bullet_activehoverwe_style.type = 'text/css'; swiper_pagination_bullet_activehoverwe_style.innerHTML =
 ` .swiper-pagination-bullet-active:hover{ opacity:1;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullet_activehoverwe_style);var swiper_pagination_fractionwe_style = document.createElement('style'); swiper_pagination_fractionwe_style.type = 'text/css'; swiper_pagination_fractionwe_style.innerHTML =
 ` .swiper-pagination-fraction{ font-size:16px;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_fractionwe_style);
 },
 },
 });
 
 /* Slider 3*/
 var slider_wrapper_vsetin = new Swiper(".slider-wrapper-tri", {
 wrapperClass: "slider-list-tri",
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
 loop: true,

 on: {
 init: function () {
 var swiper_pagination_bulletwe_style = document.createElement('style'); swiper_pagination_bulletwe_style.type = 'text/css'; swiper_pagination_bulletwe_style.innerHTML =
 ` .swiper-pagination-bullet{ background:#000099;
 margin-right:8px;
 transition:.2s;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bulletwe_style);var swiper_pagination_bullethoverwe_style = document.createElement('style'); swiper_pagination_bullethoverwe_style.type = 'text/css'; swiper_pagination_bullethoverwe_style.innerHTML =
 ` .swiper-pagination-bullet:hover{ opacity:.7;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullethoverwe_style);var swiper_pagination_bullet_activehoverwe_style = document.createElement('style'); swiper_pagination_bullet_activehoverwe_style.type = 'text/css'; swiper_pagination_bullet_activehoverwe_style.innerHTML =
 ` .swiper-pagination-bullet-active:hover{ opacity:1;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullet_activehoverwe_style);var swiper_pagination_fractionwe_style = document.createElement('style'); swiper_pagination_fractionwe_style.type = 'text/css'; swiper_pagination_fractionwe_style.innerHTML =
 ` .swiper-pagination-fraction{ font-size:16px;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_fractionwe_style);
 },
 },
 });
  /* Slider 4 */
 var slider_wrapper_hradiste = new Swiper(".slider-wrapper-ctyri", {
 wrapperClass: "slider-list-ctyri",
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

 on: {
 init: function () {
 var swiper_pagination_bulletwe_style = document.createElement('style'); swiper_pagination_bulletwe_style.type = 'text/css'; swiper_pagination_bulletwe_style.innerHTML =
 ` .swiper-pagination-bullet{ background:#000099;
 margin-right:8px;
 transition:.2s;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bulletwe_style);var swiper_pagination_bullethoverwe_style = document.createElement('style'); swiper_pagination_bullethoverwe_style.type = 'text/css'; swiper_pagination_bullethoverwe_style.innerHTML =
 ` .swiper-pagination-bullet:hover{ opacity:.7;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullethoverwe_style);var swiper_pagination_bullet_activehoverwe_style = document.createElement('style'); swiper_pagination_bullet_activehoverwe_style.type = 'text/css'; swiper_pagination_bullet_activehoverwe_style.innerHTML =
 ` .swiper-pagination-bullet-active:hover{ opacity:1;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullet_activehoverwe_style);var swiper_pagination_fractionwe_style = document.createElement('style'); swiper_pagination_fractionwe_style.type = 'text/css'; swiper_pagination_fractionwe_style.innerHTML =
 ` .swiper-pagination-fraction{ font-size:16px;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_fractionwe_style);
 },
 },
 });
/* Slider 5 */
 var slider_wrapper_hradiste = new Swiper(".slider-wrapper-pet", {
 wrapperClass: "slider-list-pet",
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

 on: {
 init: function () {
 var swiper_pagination_bulletwe_style = document.createElement('style'); swiper_pagination_bulletwe_style.type = 'text/css'; swiper_pagination_bulletwe_style.innerHTML =
 ` .swiper-pagination-bullet{ background:#000099;
 margin-right:8px;
 transition:.2s;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bulletwe_style);var swiper_pagination_bullethoverwe_style = document.createElement('style'); swiper_pagination_bullethoverwe_style.type = 'text/css'; swiper_pagination_bullethoverwe_style.innerHTML =
 ` .swiper-pagination-bullet:hover{ opacity:.7;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullethoverwe_style);var swiper_pagination_bullet_activehoverwe_style = document.createElement('style'); swiper_pagination_bullet_activehoverwe_style.type = 'text/css'; swiper_pagination_bullet_activehoverwe_style.innerHTML =
 ` .swiper-pagination-bullet-active:hover{ opacity:1;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullet_activehoverwe_style);var swiper_pagination_fractionwe_style = document.createElement('style'); swiper_pagination_fractionwe_style.type = 'text/css'; swiper_pagination_fractionwe_style.innerHTML =
 ` .swiper-pagination-fraction{ font-size:16px;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_fractionwe_style);
 },
 },
 });
 /* Slider 6 */
 var slider_wrapper_hradiste = new Swiper(".slider-wrapper-sest", {
 wrapperClass: "slider-list-sest",
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

 on: {
 init: function () {
 var swiper_pagination_bulletwe_style = document.createElement('style'); swiper_pagination_bulletwe_style.type = 'text/css'; swiper_pagination_bulletwe_style.innerHTML =
 ` .swiper-pagination-bullet{ background:#000099;
 margin-right:8px;
 transition:.2s;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bulletwe_style);var swiper_pagination_bullethoverwe_style = document.createElement('style'); swiper_pagination_bullethoverwe_style.type = 'text/css'; swiper_pagination_bullethoverwe_style.innerHTML =
 ` .swiper-pagination-bullet:hover{ opacity:.7;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullethoverwe_style);var swiper_pagination_bullet_activehoverwe_style = document.createElement('style'); swiper_pagination_bullet_activehoverwe_style.type = 'text/css'; swiper_pagination_bullet_activehoverwe_style.innerHTML =
 ` .swiper-pagination-bullet-active:hover{ opacity:1;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullet_activehoverwe_style);var swiper_pagination_fractionwe_style = document.createElement('style'); swiper_pagination_fractionwe_style.type = 'text/css'; swiper_pagination_fractionwe_style.innerHTML =
 ` .swiper-pagination-fraction{ font-size:16px;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_fractionwe_style);
 },
 },
 });
  /* Slider 7 */
 var slider_wrapper_hradiste = new Swiper(".slider-wrapper-sedm", {
 wrapperClass: "slider-list-sedm",
 slideClass: "slider-item-sedm",
 navigation: {
 nextEl: '.next-slide-sedm',
 prevEl: '.prev-slide-sedm'
 },
 pagination: {
 type: 'bullets',
 el: '.pagination-sedm',
 clickable: true,

 },
 autoplay: {
 delay: 3500,

 },
 speed: 700,
 slidesPerView: 'auto',
 loop: false,

 on: {
 init: function () {
 var swiper_pagination_bulletwe_style = document.createElement('style'); swiper_pagination_bulletwe_style.type = 'text/css'; swiper_pagination_bulletwe_style.innerHTML =
 ` .swiper-pagination-bullet{ background:#000099;
 margin-right:8px;
 transition:.2s;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bulletwe_style);var swiper_pagination_bullethoverwe_style = document.createElement('style'); swiper_pagination_bullethoverwe_style.type = 'text/css'; swiper_pagination_bullethoverwe_style.innerHTML =
 ` .swiper-pagination-bullet:hover{ opacity:.7;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullethoverwe_style);var swiper_pagination_bullet_activehoverwe_style = document.createElement('style'); swiper_pagination_bullet_activehoverwe_style.type = 'text/css'; swiper_pagination_bullet_activehoverwe_style.innerHTML =
 ` .swiper-pagination-bullet-active:hover{ opacity:1;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullet_activehoverwe_style);var swiper_pagination_fractionwe_style = document.createElement('style'); swiper_pagination_fractionwe_style.type = 'text/css'; swiper_pagination_fractionwe_style.innerHTML =
 ` .swiper-pagination-fraction{ font-size:16px;
 } `;
 document.getElementsByTagName('head')[0].appendChild(swiper_pagination_fractionwe_style);
 },
 },
 });
 
});
