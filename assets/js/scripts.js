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
    576:{
      slidesPerView:2
    },
    992:{
      slidesPerView:3
    }
  }
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