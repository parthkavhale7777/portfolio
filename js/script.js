document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Active link highlighting
    function changeLinkState() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
        window.addEventListener('scroll', revealOnScroll);
    });

    function revealOnScroll() {
        revealElements.forEach(element => {
            const windowHeight = window.innerHeight;
            const revealTop = element.getBoundingClientRect().top;
            const revealPoint = 50;

            if (revealTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }

    // Toggle mobile menu
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navList = document.querySelector('nav ul');

    mobileMenuIcon.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});
