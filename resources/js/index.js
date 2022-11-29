let swiperRoomRelated = new Swiper(".swiper", {
  effect: "default",
  direction: "horizontal",
  loop: true,
  slidesPerView: "1",
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
