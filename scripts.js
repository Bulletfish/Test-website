
// Function for Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lightbox Gallery
let lightbox = document.getElementById('lightbox');
let slides = document.getElementsByClassName('slide');
let currentIndex = 1;

function openLightbox() {
    lightbox.style.display = "block";
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function setCurrentSlide(n) {
    showSlides(currentIndex = n);
}

function changeSlide(n) {
    showSlides(currentIndex += n);
}

function showSlides(n) {
    if (n > slides.length) { currentIndex = 1 }
    if (n < 1) { currentIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}


// Sticky Navigation with Shadow
let nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    if (window.scrollY > 10) { // Add shadow after 10px scroll
        nav.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
    } else {
        nav.style.boxShadow = "none";
    }
});

