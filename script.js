// ===================================
// Matrix Background Animation
// ===================================
const matrixCanvas = document.getElementById('matrix-bg');
const ctx = matrixCanvas.getContext('2d');

matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const fontSize = 14;
const columns = matrixCanvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(2, 12, 27, 0.05)';
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    
    ctx.fillStyle = '#64FFDA';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// Resize canvas on window resize
window.addEventListener('resize', () => {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
});

// ===================================
// Custom Cursor Follower
// ===================================
const cursorFollower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const diffX = mouseX - followerX;
    const diffY = mouseY - followerY;
    
    followerX += diffX * 0.1;
    followerY += diffY * 0.1;
    
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Expand cursor on hover over interactive elements
const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.borderColor = '#00FF88';
    });
    
    el.addEventListener('mouseleave', () => {
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.borderColor = '#64FFDA';
    });
});

// ===================================
// Scroll Progress Bar
// ===================================
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    
    scrollProgress.style.width = progress + '%';
});

// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

// ===================================
// Typing Animation for Hero Subtitle
// ===================================
const typedTextElement = document.getElementById('typed-text');
const texts = [
    'DevSecOps Enthusiast ',
    'Cloud Security Enginneer',
    'Cybersecurity Student',
    'Post-Quantum Cryptographer'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typingSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeText, typingSpeed);
}

// Start typing animation after a short delay
setTimeout(typeText, 1000);

// ===================================
// Counter Animation for Stats
// ===================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when stats section is visible
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                if (!stat.classList.contains('animated')) {
                    animateCounter(stat);
                    stat.classList.add('animated');
                }
            });
        }
    });
}, observerOptions);

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===================================
// Project Filtering
// ===================================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filterValue === 'all') {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease';
            } else {
                const categories = card.getAttribute('data-category');
                if (categories.includes(filterValue)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

// ===================================
// AOS (Animate On Scroll) Initialization
// ===================================
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out'
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link
    const mailtoLink = `mailto:mouradelouatik04@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Opening your email client...');
    
    // Reset form
    contactForm.reset();
});

// ===================================
// Download CV Functionality
// ===================================
const downloadCVBtn = document.getElementById('downloadCV');

downloadCVBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const link = document.createElement('a');
    link.href = './Mourad-EL-OUATIK.pdf';
    link.download = 'Mourad_EL_OUATIK_CV.pdf';
    link.click();
});

// ===================================
// Parallax Effect for Hero Section
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
    }
    
    if (heroVisual) {
        heroVisual.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// ===================================
// Dynamic Dashboard Animation
// ===================================
function animateDashboard() {
    const threatLines = document.querySelectorAll('.threat-line');
    
    threatLines.forEach((line, index) => {
        setInterval(() => {
            line.style.background = `linear-gradient(90deg, transparent, ${Math.random() > 0.5 ? '#64FFDA' : '#00FF88'}, transparent)`;
        }, 2000 + (index * 500));
    });
}

animateDashboard();

// ===================================
// Skill Progress Bar Animation
// ===================================
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                bar.style.animation = 'fillProgress 2s ease forwards';
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// ===================================
// Add hover sound effect (optional)
// ===================================
const hoverElements = document.querySelectorAll('.btn-primary-custom, .btn-secondary-custom, .project-card, .cert-card');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        // You can add sound effects here if desired
        element.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
});

// ===================================
// Lazy Loading for Images (if you add real images later)
// ===================================
if ('IntersectionObserver' in window) {
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
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===================================
// Accessibility: Skip to Content
// ===================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && !e.shiftKey) {
        const focusedElement = document.activeElement;
        if (focusedElement.tagName === 'A') {
            focusedElement.style.outline = '2px solid #64FFDA';
        }
    }
});

// ===================================
// Console Easter Egg
// ===================================
console.log('%c🔐 Welcome to Mourad EL OUATIK\'s Portfolio', 
    'color: #64FFDA; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #64FFDA;');
console.log('%c🛡️ DevSecOps Engineer | Cloud Security Specialist', 
    'color: #00FF88; font-size: 14px;');
console.log('%c📧 Contact: mouradelouatik04@gmail.com', 
    'color: #8892B0; font-size: 12px;');
console.log('%c🔗 GitHub: https://github.com/Mourad-wh', 
    'color: #8892B0; font-size: 12px;');

// ===================================
// Performance Monitoring
// ===================================
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`⚡ Page loaded in ${(loadTime / 1000).toFixed(2)} seconds`);
});

// ===================================
// Service Worker Registration (for PWA - optional)
// ===================================
if ('serviceWorker' in navigator) {
    // Uncomment when you create a service worker file
    // navigator.serviceWorker.register('/sw.js')
    //     .then(reg => console.log('Service Worker registered'))
    //     .catch(err => console.log('Service Worker registration failed'));
}

// ===================================
// Dark Mode Toggle (optional future feature)
// ===================================
// You can add a dark/light mode toggle button later
// This is just the foundation
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
}

// ===================================
// Initialize Tooltips (Bootstrap)
// ===================================
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// ===================================
// Prevent Right Click (optional - for protecting content)
// ===================================
// Uncomment if you want to disable right-click
// document.addEventListener('contextmenu', e => e.preventDefault());

// ===================================
// Analytics Tracking (placeholder)
// ===================================
// Add your analytics code here (Google Analytics, etc.)
function trackEvent(category, action, label) {
    // Example: gtag('event', action, {'event_category': category, 'event_label': label});
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Track button clicks
document.querySelectorAll('.btn-primary-custom, .btn-secondary-custom').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnText = e.target.textContent.trim();
        trackEvent('Button', 'Click', btnText);
    });
});

// Track project card interactions
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectTitle = card.querySelector('.project-title').textContent;
        trackEvent('Project', 'View', projectTitle);
    });
});

// ===================================
// Loading Screen (optional)
// ===================================
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// ===================================
// Mobile Menu Enhancement
// ===================================
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

if (navbarToggler) {
    navbarToggler.addEventListener('click', () => {
        navbarToggler.classList.toggle('active');
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
            navbarCollapse.classList.remove('show');
            navbarToggler.classList.remove('active');
        }
    }
});

// ===================================
// Keyboard Navigation
// ===================================
document.addEventListener('keydown', (e) => {
    // Press 'C' to scroll to contact
    if (e.key.toLowerCase() === 'c' && !e.ctrlKey && !e.metaKey) {
        const contactSection = document.getElementById('contact');
        if (contactSection && document.activeElement.tagName !== 'INPUT' && 
            document.activeElement.tagName !== 'TEXTAREA') {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Press 'P' to scroll to projects
    if (e.key.toLowerCase() === 'p' && !e.ctrlKey && !e.metaKey) {
        const projectsSection = document.getElementById('projects');
        if (projectsSection && document.activeElement.tagName !== 'INPUT' && 
            document.activeElement.tagName !== 'TEXTAREA') {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Press 'Home' to scroll to top
    if (e.key === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ===================================
// Improved Scroll Animations
// ===================================
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.timeline-item, .project-card, .skill-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// ===================================
// Console Security Warning
// ===================================
console.log('%c⚠️ SECURITY WARNING', 
    'color: #FF6B6B; font-size: 24px; font-weight: bold;');
console.log('%cUsing this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS.\nDo not enter or paste code that you do not understand.', 
    'color: #FF6B6B; font-size: 14px;');

// ===================================
// Initialize Everything
// ===================================
console.log('%c✅ Portfolio initialized successfully!', 
    'color: #00FF88; font-size: 14px; font-weight: bold;');
