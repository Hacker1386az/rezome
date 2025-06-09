// Smooth scrolling for internal anchor links
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Sticky header background toggle on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('main section');
    const skillLevels = document.querySelectorAll('.skill-level');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
        );
    }

    function animateOnScroll() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });

        // Animate skill bars
        skillLevels.forEach(skill => {
            if (isInViewport(skill) && !skill.classList.contains('animated')) {
                skill.classList.add('animated');
                const level = skill.getAttribute('data-level');
                skill.style.width = level;
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});
