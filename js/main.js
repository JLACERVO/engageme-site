
function toggleMenu(){
    document.querySelector('header nav').classList.toggle('active');
}

// Scroll Animations
const sections = document.querySelectorAll('section, .card, .testimonial, .hero, .faq-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { 
        if(entry.isIntersecting){ entry.target.classList.add('visible'); } 
    });
}, { threshold:0.2 });
sections.forEach(section => observer.observe(section));

// FAQ Acordeão
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const answer = item.querySelector('.faq-answer');
        answer.classList.toggle('show');
    });
});
