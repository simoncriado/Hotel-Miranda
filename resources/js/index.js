// Setting the amount of slides visible in the screen based on the window´s width
const responsiveSwiper = (screenWidth) => {
  let numSlides = 0;
  if (screenWidth > 1000) {
    numSlides = 3;
  } else {
    numSlides = 1;
  }
  return new Swiper(".swiper", {
    effect: "default",
    direction: "horizontal",
    loop: true,
    slidesPerView: numSlides,
    spaceBetween: 30,
    autoplay: {
      delay: 6000,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

// Creating a swiper based with the window´s width as a parameter
let swiper = responsiveSwiper(window.innerWidth);

window.addEventListener("resize", () => {
  swiper = responsiveSwiper(innerWidth);
});

const swiperFeatures = new Swiper(".swiperFeatures", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "1",
  spaceBetween: 30,
  autoplay: {
    delay: 6000,
  },
  pagination: {
    el: ".swiperFeatures-pagination",
    type: "bullets",
  },
});

const swiperMenu = new Swiper(".swiperMenu", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "1",
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".swiperMenu-button-next",
    prevEl: ".swiperMenu-button-prev",
  },
});
