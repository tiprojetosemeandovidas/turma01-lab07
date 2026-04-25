
// Inicialização do AOS (Animate on Scroll)
AOS.init({
    once: true,
    mirror: false
});

// Efeito de mudança na Navbar ao rolar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
        nav.style.padding = '1rem 5%';
    } else {
        nav.style.background = 'transparent';
        nav.style.padding = '2rem 5%';
    }
});

// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
