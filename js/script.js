// Animações de entrada suaves
ScrollReveal().reveal('.reveal', {
    distance: '60px',
    duration: 1200,
    easing: 'cubic-bezier(0.2, 0, 0, 1)',
    origin: 'bottom',
    interval: 200
});

// Efeito de Parallax na Hero
window.addEventListener('scroll', function() {
    let scroll = window.pageYOffset;
    document.querySelector('.hero-image-wrapper img').style.transform = `translateY(${scroll * 0.4}px)`;
});
