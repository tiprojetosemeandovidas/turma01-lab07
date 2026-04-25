// Efeito de Header ao Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.background = window.scrollY > 50 ? 'rgba(249, 247, 245, 0.95)' : 'transparent';
    header.style.boxShadow = window.scrollY > 50 ? '0 2px 10px rgba(0,0,0,0.05)' : 'none';
});

// Configuração do ScrollReveal para movimentos fluidos
ScrollReveal().reveal('.reveal', {
    distance: '50px',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 200,
    origin: 'bottom'
});
