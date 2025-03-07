let currentIndex = 0;
const slides = document.querySelectorAll(".slider img");
const totalSlides = slides.length;

// Function to Show Slide
function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0; // Loop back to first image
    } else if (index < 0) {
        currentIndex = totalSlides - 1; // Go to last image
    } else {
        currentIndex = index;
    }

    // Move slider
    document.querySelector(".slider").style.transform = `translateX(${-currentIndex * 100}%)`;
}

// Next and Previous Slide Functions
function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
