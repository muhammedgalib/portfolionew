// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 800, // Animation duration
        once: true,    // Whether animation should happen only once - while scrolling down
        offset: 100,   // Offset (in px) from the original trigger point
    });
});

// Lightbox Functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");
const triggers = document.querySelectorAll(".lightbox-trigger");

// Open Lightbox when any gallery image is clicked
triggers.forEach(trigger => {
    trigger.addEventListener("click", function() {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src; // Get the source of the clicked image
    });
});

// Close Lightbox when clicking the "X" button
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

// Close Lightbox when clicking outside the image
if (lightbox) {
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
}

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
