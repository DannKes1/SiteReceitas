// carousel.js
const carousel = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images img");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

let currentIndex = 0;

function updateCarousel() {
  // Atualiza a posição do carrossel
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Adiciona o event listener para o botão "anterior"
prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
  updateCarousel();
});

// Adiciona o event listener para o botão "próximo"
nextButton.addEventListener("click", () => {
  currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  updateCarousel();
});

// Inicializa o carrossel
updateCarousel();
