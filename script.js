document.addEventListener('DOMContentLoaded', function() {
    // Configura la próxima fecha aquí (solo si existe el elemento)
    const fechaElement = document.getElementById('fecha');
    if (fechaElement) {
        const proximaJunta = new Date('2025-09-26T19:30:00');
        const opciones = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            timeZone: 'Europe/Madrid'
        };
        fechaElement.textContent = proximaJunta.toLocaleDateString('es-ES', opciones);
    }

    // Galería de fotos - Función genérica para inicializar carruseles
    function initCarousel(containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.log('Contenedor no encontrado:', containerId);
            return;
        }

        const slides = container.querySelectorAll('.slide');
        const dots = container.querySelectorAll('.dot');
        const prevBtn = container.querySelector('.prev-btn');
        const nextBtn = container.querySelector('.next-btn');
        
        if (!prevBtn || !nextBtn || slides.length === 0) {
            console.log('Elementos faltantes en:', containerId);
            return;
        }

        let currentSlide = 0;
        let slideInterval;

        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
            }
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });

        // Autoavance de la galería
        slideInterval = setInterval(nextSlide, 10000);

        // Pausar autoavance al interactuar
        container.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        container.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 10000);
        });

        console.log('Carrusel inicializado:', containerId);
    }

    // Inicializar ambos carruseles
    initCarousel('galeria-fase1');
    initCarousel('galeria-fase2');

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