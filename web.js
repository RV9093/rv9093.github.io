let menu = document.getElementById('menu');
let menubtn = document.querySelector('.menubtn');
let closebtn = document.querySelector('.closebtn');
const menuLinks = document.querySelectorAll('#menu a');
const toggleContainer = document.querySelector('.toggle-container'); 

function openMenu() {
    menu.classList.add('active');
    menubtn.style.display = 'none';
    closebtn.style.display = 'block';

    // Hide toggle container smoothly
    if (toggleContainer) {
        toggleContainer.classList.add('hide');
    }
}

function closeMenu() {
    menu.classList.remove('active');
    if (window.innerWidth <= 870) {
        menubtn.style.display = 'block';
        closebtn.style.display = 'none';
    }

    // Show toggle container smoothly
    if (toggleContainer) {
        toggleContainer.classList.remove('hide');
    }
}

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 870) {
            closeMenu();
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 870) {
        menu.classList.remove('active');
        menubtn.style.display = 'none';
        closebtn.style.display = 'none';
        if (toggleContainer) {
            toggleContainer.classList.remove('hide');
        }
    } else {
        menubtn.style.display = 'block';
    }
});

const texts = ["Front-End Developer", "Problem Solver", "Code Enthusiast"];
let index = 0;
let charIndex = 0;
let currentText = "";
let deleting = false;
const typingSpeed = 200;  
const deletingSpeed = 60; 
const delayBetweenTexts = 1000; 

const typedText = document.getElementById("typed-text");

function typeEffect() {
    currentText = texts[index];

    if (!deleting) {
        typedText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            deleting = true;
            setTimeout(typeEffect, delayBetweenTexts); 
            return;
        }
    } else {
        typedText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            index = (index + 1) % texts.length;
        }
    }

    const speed = deleting ? deletingSpeed : typingSpeed;
    setTimeout(typeEffect, speed);
}

typeEffect();

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const darkModeToggle = document.getElementById("darkmode-toggle");

darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", darkModeToggle.checked);
});

document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.querySelector(".name1");
    const emailInput = document.querySelector(".email");
    const phoneInput = document.querySelector(".phone");
    const messageInput = document.querySelector(".message");

    const namePlaceholders = ["Your full name", "e.g Rishikesh Verma"];
    const emailPlaceholders = ["your.email@example.com", "e.g rishi9093@gmail.com"];
    const phonePlaceholders = ["e.g 9876543210"];
    const messagePlaceholders = ["Share your thoughts...", "Tell me about your project idea..."];

    function rotatePlaceholders(input, placeholders) {
        let index = 0;
        setInterval(() => {
            input.placeholder = placeholders[index];
            index = (index + 1) % placeholders.length;
        }, 2000);
    }

    rotatePlaceholders(nameInput, namePlaceholders);
    rotatePlaceholders(emailInput, emailPlaceholders);
    rotatePlaceholders(phoneInput, phonePlaceholders);
    rotatePlaceholders(messageInput, messagePlaceholders);
});
