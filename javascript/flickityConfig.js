const carouselEl = document.querySelector(".carousel");
const carousel = new Flickity(carouselEl, {
  wrapAround: true,
});

const carouselFreeEl = document.querySelector(".carouselFree");
const carouselFree = new Flickity(carouselFreeEl, {
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
  autoPlay: true,
});
