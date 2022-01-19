$(document).ready(function () {
 var slider_wrapper = new Swiper(".slider-wrapper-jedna", {
 wrapperClass: "slider-list",
 slideClass: "slider-item",
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
 delay: 3000,

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
 /* slider 2 */
 var slider_wrapper_zlin = new Swiper(".slider-wrapper-dva", {
 wrapperClass: "slider-list",
 slideClass: "slider-item",
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
 delay: 3000,

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
 
 /* Slider 3*/
 var slider_wrapper_vsetin = new Swiper(".slider-wrapper-tri", {
 wrapperClass: "slider-list",
 slideClass: "slider-item",
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
 delay: 3000,

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
 /* slider 4 */
 var slider_wrapper_olomouc = new Swiper(".slider-wrapper-ctyri", {
 wrapperClass: "slider-list",
 slideClass: "slider-item",
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
 delay: 3000,

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
/* Slider 5 */
 var slider_wrapper_hradiste = new Swiper(".slider-wrapper-pet", {
 wrapperClass: "slider-list",
 slideClass: "slider-item",
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
 delay: 3000,

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
 
});
