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

const navbar = document.querySelector(".navigation__link-box");

const addResponsive = function () {
  if (navbar.className === "navigation__link-box") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navigation__link-box";
  }
};
