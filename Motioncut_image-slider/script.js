let currentIndex = 0;
const imagee = document.querySelectorAll(".imagee");
const slider = document.querySelector(".slider");
const totalSlides = imagee.length;

document.getElementById("next").addEventListener("click", () => moveSlide(1));
document.getElementById("prev").addEventListener("click", () => moveSlide(-1));

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => moveSlide(1), 3000); // Auto-slide every 3 seconds
