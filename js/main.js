// ==========================================
// IFARD-SA - JavaScript con Efectos de Scroll
// ==========================================

// ==========================================
// 1. SCROLL SUAVE PARA NAVEGACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', function() {

    // Seleccionar todos los enlaces de navegación
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');

            // Si el href es solo "#", volver al inicio
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerOffset = 80; // Altura del header fijo
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ==========================================
// 2. HEADER CON EFECTO AL HACER SCROLL
// ==========================================
const header = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Agregar clase 'scrolled' cuando se hace scroll
    if (scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Ocultar header al hacer scroll hacia abajo, mostrar al hacer scroll hacia arriba
    if (scrollTop > lastScrollTop && scrollTop > 200) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
});

// ==========================================
// 3. ANIMACIONES AL HACER SCROLL (REVEAL)
// ==========================================
const observerOptions = {
    root: null,
    threshold: 0.15, // El elemento debe estar visible al 15%
    rootMargin: '0px 0px -50px 0px'
};

// Callback que se ejecuta cuando un elemento entra en viewport
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            // Opcional: dejar de observar después de animar
            // observer.unobserve(entry.target);
        }
    });
};

// Crear el observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observar elementos que queremos animar
document.addEventListener('DOMContentLoaded', function() {
    // Agregar clase 'reveal' a elementos que queremos animar
    const elementsToReveal = document.querySelectorAll(
        '.section-title, .service-card, .about-text, .about-image, .contact-form, .hero h1, .hero p, .cta-button'
    );

    elementsToReveal.forEach((element, index) => {
        element.classList.add('reveal');
        // Agregar delay escalonado para efecto cascada
        element.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(element);
    });
});

// ==========================================
// 4. BOTÓN "SCROLL TO TOP"
// ==========================================
// Crear el botón
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.setAttribute('aria-label', 'Volver arriba');
document.body.appendChild(scrollToTopBtn);

// Mostrar/ocultar botón según scroll
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Funcionalidad del botón
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// 5. NAVEGACIÓN ACTIVA
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// 6. PARALLAX SUAVE EN HERO SECTION
// ==========================================
const hero = document.querySelector('.hero');

if (hero) {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;

        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            hero.style.opacity = 1 - (scrolled / 600);
        }
    });
}

// ==========================================
// 7. ANIMACIÓN DE CONTADORES (Si hay números)
// ==========================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60 FPS
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observar contadores si existen
const counters = document.querySelectorAll('[data-counter]');
if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-counter'));
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

// ==========================================
// 8. FORMULARIO - PREVENIR ENVÍO Y MOSTRAR CONFIRMACIÓN
// ==========================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtener valores del formulario
        const formData = new FormData(this);
        const nombre = formData.get('nombre');

        // Mostrar mensaje de confirmación
        const confirmationMessage = document.createElement('div');
        confirmationMessage.className = 'form-confirmation';
        confirmationMessage.innerHTML = `
            <p>✓ Gracias ${nombre}, tu mensaje ha sido enviado correctamente.</p>
            <p>Nos pondremos en contacto contigo pronto.</p>
        `;

        // Reemplazar formulario con mensaje
        this.style.opacity = '0';
        setTimeout(() => {
            this.style.display = 'none';
            this.parentElement.appendChild(confirmationMessage);

            // Animar entrada del mensaje
            setTimeout(() => {
                confirmationMessage.style.opacity = '1';
            }, 100);

            // Resetear formulario después de 5 segundos
            setTimeout(() => {
                confirmationMessage.style.opacity = '0';
                setTimeout(() => {
                    confirmationMessage.remove();
                    this.style.display = 'block';
                    this.reset();
                    setTimeout(() => {
                        this.style.opacity = '1';
                    }, 100);
                }, 300);
            }, 5000);
        }, 300);
    });
}

// ==========================================
// 9. LAZY LOADING DE IMÁGENES (Si se agregan)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});

// ==========================================
// 10. EFECTO DE TYPING EN HERO (OPCIONAL)
// ==========================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Aplicar efecto typing al título hero (comentado por defecto)
// const heroTitle = document.querySelector('.hero h1');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 80);
// }

// ==========================================
// CONSOLA - Mensaje de bienvenida
// ==========================================
console.log('%c¡Bienvenido a IFARD-SA! 🎓', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cSitio web desarrollado con HTML, CSS y JavaScript', 'color: #64748b; font-size: 12px;');
