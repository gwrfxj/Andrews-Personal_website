// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
        }
    });
}, observerOptions);

document.querySelectorAll('.research-card, .fitness-card, .work-card, .publication-box').forEach(el => {
    observer.observe(el);
});

// Add hover effect for portfolio cards
document.querySelectorAll('#portfolio > div > div').forEach(card => {
    if (card.style.background && card.style.background.includes('gradient')) {
        observer.observe(card);
    }
});
// Mobile navigation toggle functionality
// This adds an event listener to the hamburger icon so that on small screens
// users can show or hide the navigation links. When the nav has the class
// 'open', the CSS will display the menu; otherwise it remains hidden.
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navElement = document.querySelector('nav');
    if (navToggle && navElement) {
        navToggle.addEventListener('click', () => {
            navElement.classList.toggle('open');
        });
    }
});
