document.addEventListener('DOMContentLoaded', () => {
    // 1. Loader Logic - Refined for "Premium" Entrance
    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.transition = 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), clip-path 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
                loader.style.opacity = '0';
                loader.style.clipPath = 'inset(0 0 100% 0)'; // Artistic exit
                
                setTimeout(() => {
                    loader.style.display = 'none';
                    document.body.classList.add('loaded'); // Trigger CSS entrance animations
                    triggerHeroAnimations();
                }, 1200);
            }, 1800); // Elegant wait time
        });
    }

    // 2. Navbar Interaction - Glassmorphism Toggle
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Staggered Reveal Observer - Seamless Section-to-Section
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered delay logic for premium feel
                const delay = index * 150;
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Track all revealable elements
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .drink-card, .order-card, .gallery-item');
    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Hero Section Animations (Framer-like entrance)
    function triggerHeroAnimations() {
        const heroTitle = document.querySelector('.hero-content h1');
        const heroText = document.querySelector('.hero-content p');
        const heroBtns = document.querySelector('.hero-btns');
        const scrollInd = document.querySelector('.scroll-indicator');

        if(heroTitle) heroTitle.classList.add('active');
        if(heroText) setTimeout(() => heroText.classList.add('active'), 200);
        if(heroBtns) setTimeout(() => heroBtns.classList.add('active'), 400);
        if(scrollInd) setTimeout(() => scrollInd.classList.add('active'), 1000);
    }

    // 5. Button Interaction - Subtle Magnetic Lift
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.05)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0, 0) scale(1)`;
        });
    });

    // 6. Mobile Menu Logic
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });
    }

    // Smooth Scroll for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
