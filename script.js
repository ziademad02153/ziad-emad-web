// أضف هذا في بداية ملف script.js
(function(){
    // كل الكود هنا
    document.oncontextmenu = function(){ return false; }
    document.onkeydown = function(e){
        if(e.keyCode == 123) return false;
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
    }
})();

// انتظر حتى يتم تحميل المستند بالكامل
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

    // 3. تفعيل تأثيرات بطاقات التواصل
    const initializeContactCards = () => {
        const cards = document.querySelectorAll('.contact-card');
        cards.forEach(card => {
            card.addEventListener('click', function(e) {
                if (e.target.tagName.toLowerCase() !== 'a') {
                    const info = this.querySelector('.contact-info p').textContent;
                    navigator.clipboard.writeText(info)
                        .then(() => {
                            showToast('تم نسخ المعلومات!');
                        })
                        .catch(() => {
                            showToast('حدث خطأ أثناء النسخ');
                        });
                }
            });
        });
    };

    // 4. نسخ معلومات التواصل
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                showToast('تم نسخ المعلومات!');
            })
            .catch(err => {
                console.error('فشل النسخ:', err);
                showToast('حدث خطأ أثناء النسخ');
            });
    };

    // 5. إظهار رسالة النسخ
    let currentToast = null;

    const showToast = (message) => {
        // إزالة الإشعار السابق إذا كان موجوداً
        if (currentToast) {
            document.body.removeChild(currentToast);
        }

        // إنشاء إشعار جديد
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        
        // حفظ الإشعار الحالي
        currentToast = toast;
        
        document.body.appendChild(toast);

        // إظهار الإشعار
        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        // إخفاء الإشعار بعد فترة
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(toast)) {
                    document.body.removeChild(toast);
                    currentToast = null;
                }
            }, 300);
        }, 2000);
    };

    // 6. تفعيل تأثيرات القائمة
    const initializeNavigation = () => {
        const sections = document.querySelectorAll('section[id]');
        const navItems = document.querySelectorAll('.nav-item');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href').slice(1) === current) {
                    item.classList.add('active');
                }
            });
        });
    };

    // 7. تفعيل تأثيرات المشاريع
    const initializeProjects = () => {
        const projects = document.querySelectorAll('.project-card');
        projects.forEach(project => {
            project.addEventListener('mouseenter', () => {
                project.style.transform = 'translateY(-10px)';
            });

            project.addEventListener('mouseleave', () => {
                project.style.transform = 'translateY(0)';
            });
        });
    };

    // 8. تفعيل شريط التقدم
    const initializeScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = `${scrolled}%`;
        });
    };

    // تشغيل جميع الوظائف
    smoothScroll();
    animateSkills();
    initializeContactCards();
    initializeNavigation();
    initializeProjects();
    initializeScrollProgress();

    // 9. تفعيل تأثير التحميل
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        document.querySelectorAll('.main-card').forEach(card => {
            card.classList.add('fade-in');
        });
    });
}); 