// Animaciones al hacer scroll
const animatedElements = document.querySelectorAll(
    '.fade-in, .fade-up, .fade-down, .fade-left, .fade-right'
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

animatedElements.forEach(el => observer.observe(el));


// Dark mode
const btn = document.getElementById("darkModeBtn");
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
// MENÚ HAMBURGUESA
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

const words = [
    "Desarrollador Web",
    "Desarrollador Backend",
    "Desarrollador Móvil",
    "Ingeniero Informático"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const speed = 120;

function typeEffect() {
    currentWord = words[i];

    if (isDeleting) {
        document.getElementById("typed").textContent = currentWord.substring(0, j--);
    } else {
        document.getElementById("typed").textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();
