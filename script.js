// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initPreloader();
    initNavigation();
    initScrollAnimations();
    initSkills();
    initProjects();
    initCertificates();
    initSocialLinks();
    initContactForm();
    initIcons();
});

// Preloader functionality
function initPreloader() {
    const preloader = document.getElementById('preloader');
    
    // Hide preloader after 2.5 seconds
    setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 2500);
}

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navItems = document.querySelectorAll('.nav-item');
    
    // Handle scroll events for navbar background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active navigation item
        updateActiveNavItem();
    });
    
    // Update active navigation item based on scroll position
    function updateActiveNavItem() {
        const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach((sectionId, index) => {
            const section = document.getElementById(sectionId);
            if (section) {
                const { offsetTop, offsetHeight } = section;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    // Remove active class from all nav items
                    navItems.forEach(item => item.classList.remove('active'));
                    // Add active class to current nav item
                    navItems[index].classList.add('active');
                }
            }
        });
    }
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .certificate-card, .about-text');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Skills data and initialization
function initSkills() {
    const skills = [
        { name: 'Machine Learning', icon: 'brain' },
        { name: 'Deep Learning', icon: 'layers' },
        { name: 'Python', icon: 'code' },
        { name: 'TensorFlow', icon: 'zap' },
        { name: 'PyTorch', icon: 'cpu' },
        { name: 'Computer Vision', icon: 'eye' },
        { name: 'NLP', icon: 'message-square' },
        { name: 'Data Analysis', icon: 'bar-chart-3' },
        { name: 'SQL', icon: 'database' },
        { name: 'Git', icon: 'git-branch' },
        { name: 'Linux', icon: 'terminal' },
        { name: 'MLOps', icon: 'workflow' }
    ];
    
    const skillsGrid = document.getElementById('skillsGrid');
    
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <div class="skill-icon">
                <i data-lucide="${skill.icon}"></i>
            </div>
            <div class="skill-name">${skill.name}</div>
        `;
        skillsGrid.appendChild(skillCard);
    });
}

// Projects data and initialization
function initProjects() {
    const projects = [
        {
            title: 'AI Chatbot',
            description: 'Advanced NLP chatbot built with transformer models and natural language understanding. Features context-aware responses and sentiment analysis.',
            image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
            technologies: ['Python', 'TensorFlow', 'NLP', 'Flask'],
            githubUrl: '#',
            demoUrl: '#'
        },
        {
            title: 'Image Classifier',
            description: 'Deep CNN model for multi-class image classification with 95% accuracy. Implemented transfer learning with pre-trained models.',
            image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
            technologies: ['PyTorch', 'Computer Vision', 'CNN', 'Python'],
            githubUrl: '#',
            demoUrl: '#'
        },
        {
            title: 'Recommendation System',
            description: 'Collaborative filtering recommendation engine using matrix factorization and deep learning for personalized suggestions.',
            image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=600',
            technologies: ['Python', 'Pandas', 'Scikit-learn', 'NumPy'],
            githubUrl: '#',
            demoUrl: '#'
        }
    ];
    
    const projectsGrid = document.getElementById('projectsGrid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}" class="project-image">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="technology-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.githubUrl}" class="project-link" target="_blank" rel="noopener noreferrer">
                        <i data-lucide="github"></i>
                        <span>Code</span>
                    </a>
                    <a href="${project.demoUrl}" class="project-link" target="_blank" rel="noopener noreferrer">
                        <i data-lucide="external-link"></i>
                        <span>Demo</span>
                    </a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Certificates data and initialization
function initCertificates() {
    const certificates = [
        {
            title: 'Machine Learning Specialization',
            issuer: 'Stanford University - Coursera',
            logo: 'https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=200',
            date: '2024'
        },
        {
            title: 'Deep Learning Specialization',
            issuer: 'deeplearning.ai - Coursera',
            logo: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=200',
            date: '2024'
        },
        {
            title: 'Python for Data Science',
            issuer: 'IBM - Coursera',
            logo: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=200',
            date: '2023'
        },
        {
            title: 'TensorFlow Developer',
            issuer: 'TensorFlow - Google',
            logo: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=200',
            date: '2024'
        },
        {
            title: 'AWS Machine Learning',
            issuer: 'Amazon Web Services',
            logo: 'https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=200',
            date: '2024'
        },
        {
            title: 'Computer Vision Fundamentals',
            issuer: 'OpenCV - Udacity',
            logo: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=200',
            date: '2023'
        }
    ];
    
    const certificatesGrid = document.getElementById('certificatesGrid');
    
    certificates.forEach((cert, index) => {
        const certificateCard = document.createElement('div');
        certificateCard.className = 'certificate-card';
        certificateCard.style.animationDelay = `${index * 0.15}s`;
        certificateCard.innerHTML = `
            <div class="certificate-header">
                <div class="certificate-icon">
                    <i data-lucide="award"></i>
                </div>
                <div class="certificate-date">
                    <i data-lucide="check-circle"></i>
                    <span>${cert.date}</span>
                </div>
            </div>
            <h3 class="certificate-title">${cert.title}</h3>
            <p class="certificate-issuer">${cert.issuer}</p>
            <div class="certificate-logo">
                <img src="${cert.logo}" alt="${cert.issuer}">
            </div>
        `;
        certificatesGrid.appendChild(certificateCard);
    });
}

// Social links initialization
function initSocialLinks() {
    const socialLinks = [
        { icon: 'linkedin', href: 'https://www.linkedin.com/in/shahrukh-k-99b08931a/', label: 'LinkedIn' },
        { icon: 'github', href: 'https://github.com/Shahrukhkhan44', label: 'GitHub' },
        { icon: 'twitter', href: 'https://x.com/Shahrukh23044', label: 'Twitter' },
        { icon: 'mail', href: 'mailto:shahrukhposwal2003@gmail.com', label: 'Email' }
    ];
    
    const socialGrid = document.getElementById('socialGrid');
    
    socialLinks.forEach(social => {
        const socialLink = document.createElement('a');
        socialLink.href = social.href;
        socialLink.target = '_blank';
        socialLink.rel = 'noopener noreferrer';
        socialLink.className = 'social-link';
        socialLink.innerHTML = `
            <i data-lucide="${social.icon}"></i>
            <span>${social.label}</span>
        `;
        socialGrid.appendChild(socialLink);
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Validate form
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.innerHTML = `
            <div class="spinner"></div>
            Sending...
        `;
        
        try {
            // Simulate form submission (replace with actual form submission)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success state
            submitBtn.classList.remove('loading');
            submitBtn.classList.add('success');
            submitBtn.innerHTML = `
                <i data-lucide="check-circle"></i>
                Message Sent!
            `;
            
            // Reset form
            contactForm.reset();
            
            // Show success notification
            showNotification('Message sent successfully!', 'success');
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.classList.remove('success');
                submitBtn.innerHTML = `
                    <i data-lucide="send"></i>
                    Send Message
                `;
            }, 3000);
            
        } catch (error) {
            // Show error state
            submitBtn.classList.remove('loading');
            submitBtn.innerHTML = `
                <i data-lucide="send"></i>
                Send Message
            `;
            showNotification('Failed to send message. Please try again.', 'error');
        }
    });
}

// Initialize Lucide icons
function initIcons() {
    // Wait for Lucide to be loaded
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        // Fallback: retry after a short delay
        setTimeout(initIcons, 100);
    }
}

// Download resume functionality
function downloadResume() {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume URL
    link.download = 'Shahrukh_Kahn_Resume.pdf';
    link.target = '_blank';
    
    // Show notification
    showNotification('Resume download started...', 'info');
    
    // Trigger download (this will work if you have an actual resume file)
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i data-lucide="x"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#06b6d4'};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 5000);
    
    // Initialize icons for notification
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }
    
    .notification-message {
        flex: 1;
        font-size: 0.875rem;
        font-weight: 500;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        transition: background-color 0.2s ease;
    }
    
    .notification-close:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
    
    .notification-close svg {
        width: 16px;
        height: 16px;
    }
    
    .spinner {
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top: 2px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
`;
document.head.appendChild(notificationStyles);

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.skill-card, .project-card, .certificate-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add smooth scrolling for all internal links
document.addEventListener('DOMContentLoaded', function() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key to close notifications
    if (e.key === 'Escape') {
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => notification.remove());
    }
    
    // Arrow keys for navigation (optional)
    if (e.key === 'ArrowUp' && e.ctrlKey) {
        e.preventDefault();
        scrollToTop();
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Update active navigation item
    const navItems = document.querySelectorAll('.nav-item');
    const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach((sectionId, index) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const { offsetTop, offsetHeight } = section;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                navItems.forEach(item => item.classList.remove('active'));
                navItems[index].classList.add('active');
            }
        }
    });
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            console.warn('Failed to load image:', this.src);
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Add intersection observer for lazy loading (if needed)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    // Observe lazy-loaded images
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Export functions for global access
window.scrollToSection = scrollToSection;
window.scrollToTop = scrollToTop;
window.downloadResume = downloadResume;
