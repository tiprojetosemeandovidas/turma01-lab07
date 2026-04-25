// Adicione ao seu js/script.js

// Efeito de Header ao Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.background = window.scrollY > 50 ? 'rgba(242, 235, 228, 0.95)' : 'transparent';
    header.style.boxShadow = window.scrollY > 50 ? '0 2px 10px rgba(0,0,0,0.05)' : 'none';
});

// Refinamento do ScrollReveal para animações mais orgânicas
ScrollReveal().reveal('.reveal', {
    distance: '50px',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)', // Animação mais suave (Sênior)
    interval: 200, // Tempo entre cada elemento aparecer
    origin: 'bottom'
});
