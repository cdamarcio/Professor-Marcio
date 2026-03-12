document.addEventListener('DOMContentLoaded', () => {
    
    /**
     * 1. ANIMAÇÃO DE ENTRADA AO SCROLL (FADE-IN)
     * Faz com que os cards e títulos apareçam suavemente ao subir a tela
     */
    const observerOptions = {
        threshold: 0.1, // Dispara quando 10% do elemento aparece
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Para de observar após animar uma vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos com a classe .fade-in para observar
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    /**
     * 2. ROLAGEM SUAVE (SMOOTH SCROLL)
     * Faz o clique no ícone de seta (down) deslizar até as denúncias
     */
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const targetSection = document.querySelector('#denuncias');
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    /**
     * 3. EFEITO PARALLAX SUTIL NA HERO
     * Move levemente o fundo da foto ao rolar para dar profundidade
     */
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-section');
        if (hero) {
            // Ajusta a velocidade do movimento do background
            hero.style.backgroundPositionY = (scrolled * 0.4) + 'px';
        }
    });

    /**
     * 4. LOG DE SEGURANÇA (Opcional)
     * Apenas para confirmar que o script carregou no console
     */
    console.log("Sistema do Fiscal do Povo 2028: Carregado com sucesso.");
});