const carousel = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images img");
let currentIndex = 0;

document.querySelector(".carousel-prev").addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.querySelector(".carousel-next").addEventListener("click", () => {
  currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});
