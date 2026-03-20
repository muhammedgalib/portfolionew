// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
    });
});

// Gallery Lightbox Functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");
const triggers = document.querySelectorAll(".lightbox-trigger");
const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");

let currentIndex = 0;
const imagesArray = Array.from(triggers); // Convert NodeList to Array for easy indexing

// Function to show a specific image
function showImage(index) {
    if (index >= imagesArray.length) {
        currentIndex = 0; // Loop back to the first image
    } else if (index < 0) {
        currentIndex = imagesArray.length - 1; // Loop to the last image
    } else {
        currentIndex = index;
    }
    lightboxImg.src = imagesArray[currentIndex].src;
}

// Open Lightbox when clicking an image
imagesArray.forEach((trigger, index) => {
    trigger.addEventListener("click", function() {
        lightbox.style.display = "flex";
        showImage(index);
    });
});

// Close Lightbox
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

// Click outside the image to close (ignoring the buttons)
if (lightbox) {
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}

// Next & Previous Button Clicks
if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevents the click from closing the lightbox
        showImage(currentIndex - 1);
    });
}

if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
        e.stopPropagation(); 
        showImage(currentIndex + 1);
    });
}

// Keyboard Navigation (Arrows & Escape)
document.addEventListener('keydown', function(e) {
    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowLeft") {
            showImage(currentIndex - 1);
        } else if (e.key === "ArrowRight") {
            showImage(currentIndex + 1);
        } else if (e.key === "Escape") {
            lightbox.style.display = "none";
        }
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
