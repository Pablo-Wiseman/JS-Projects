const swiperThumb = new Swiper(".gift__swiper--thumb", {
  
  direction: "horizontal",
  loop: true,
  spaceBetween: 16,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true

});

const swiperMain = new Swiper(".gift__swiper--card", {
  
  direction: "horizontal",
  loop: true,
  spaceBetween: 16,
  thumbs: {
    swiper: swiperThumb
  }

});
