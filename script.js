window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    
    setTimeout(() => {
        preloader.classList.add("loader-hide");
    }, 1500);
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});
const texts = ["Web Developer", "Graphic Designer", "Data Analyst", "YouTuber"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    const typingElement = document.querySelector(".typing-text");
    if (typingElement) {
        typingElement.textContent = letter;
    }

    let typeSpeed = 150;
    if (isDeleting) {
        typeSpeed = 75;
    }

    if (!isDeleting && letter.length === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    if(document.querySelector(".typing-text")) {
        setTimeout(type, 1000);
    }
});
const contactForm = document.getElementById('contactForm');
const successOverlay = document.getElementById('successMessage');

if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        successOverlay.style.display = 'flex';

        setTimeout(() => {
            successOverlay.style.display = 'none';
            contactForm.reset();
        }, 3000);
    });
}
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
});
