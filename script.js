let currentIndex = 0;
const items = document.querySelector(".carousel");
const totalItems = document.querySelectorAll(".carousel-item").length;

function nextSlide() {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1;
  }
  updateCarousel();
}

function updateCarousel() {
  const newTransformValue = -currentIndex * 100 + "%";
  items.style.transform = "translateX(" + newTransformValue + ")";
}
