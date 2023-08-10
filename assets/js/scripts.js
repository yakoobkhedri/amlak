// fancybox

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
// swiper
var menuSwiper = new Swiper(".home", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
});
var menuSwiper = new Swiper(".team", {
  loop: true,
  autoplay: true,
  slidesPerView: 3,
  spaceBetween:40,
  breakpoints:{
    768:{
      slidesPerView:1
    },
    992:{
      slidesPerView:2
    },
    1200:{
      slidesPerView:3
    }
  }
});
var menuSwiper = new Swiper(".testimonials", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
},
});
// animation

ScrollReveal().reveal('.top', {
  duration: 2000,
  origin: 'top',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});

ScrollReveal().reveal('.left', {
  duration: 2000,
  origin: 'left',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});