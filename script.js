// Script para interatividade do site

// Smooth scroll para botão CTA
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#importancia').scrollIntoView({ behavior: 'smooth' });
});

// Animação ao scroll (fade-in)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Aplicar animação aos itens da galeria
document.querySelectorAll('.galeria-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Contador animado para números (opcional)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 10);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 10);
}

// Highlight do link de navegação ativo
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Adicionar classe active ao nav link via CSS
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: #F4B315;
        border-bottom: 2px solid #F4B315;
        padding-bottom: 5px;
    }
`;
document.head.appendChild(style);

// Log para verificar se o script foi carregado
console.log('✅ Script do site AbelhasAgro carregado com sucesso!');