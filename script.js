document.addEventListener('DOMContentLoaded', function() {
    // Configura la próxima fecha aquí
    const proximaJunta = new Date('2025-09-26T19:30:00');
    const opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'Europe/Madrid'
    };
    
    document.getElementById('fecha').textContent = 
        proximaJunta.toLocaleDateString('es-ES', opciones);

    // Galería de fotos
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Autoavance de la galería
    let slideInterval = setInterval(nextSlide, 10000);

    // Pausar autoavance al interactuar
    const galeriaContainer = document.querySelector('.galeria-container');
    galeriaContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    galeriaContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 10000);
    });

    // Menú hamburguesa para móviles
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.main-nav ul');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Efecto de scroll para el header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.backgroundColor = 'rgba(44, 120, 108, 0.95)';
        } else {
            header.style.padding = '1rem 0';
            header.style.backgroundColor = '#2c786c';
        }
    });
});