// أضف هذا في بداية ملف script.js
(function(){
    document.oncontextmenu = function(){ return false; }
    document.onkeydown = function(e){
        if(e.keyCode == 123) return false;
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
    }
})();

document.addEventListener('DOMContentLoaded', function() {
    // 1. تفعيل تأثيرات التمرير السلس
    const smoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    };

    // 2. تفعيل ظهور المهارات
    const animateSkills = () => {
        const skills = document.querySelectorAll('.skill-badge');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('skill-visible');
                    entry.target.classList.add('pulse');
                }
            });
        }, { threshold: 0.5 });

        skills.forEach(skill => observer.observe(skill));
    };

    // تشغيل الوظائف
    smoothScroll();
    animateSkills();

    // تفعيل particles.js
    particlesJS.load('particles-js', 'particles.json');

    // تأثير ظهور تدريجي عند التمرير
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card, .skill-badge, .contact-card').forEach(el => {
        observer.observe(el);
    });

    // تأثير كتابة تلقائي للعنوان
    const typed = new Typed('#typed-text', {
        strings: ['Front-End Developer', 'Web Designer', 'UI Developer'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
}); 