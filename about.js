const slides = document.querySelectorAll('.slide');

let currentSlide = 1;

function nextSlide() {
    slides[currentSlide].style.opacity = 1;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
}

setInterval(nextSlide, 10000); // Change slide every 5 seconds
