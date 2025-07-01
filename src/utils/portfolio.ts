/**
 * Portfolio TypeScript
 * Handles interactive elements, animations, and theme switching
 */

document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll effect
    const header: HTMLElement | null = document.querySelector('header');
    const hamburger: HTMLElement | null = document.querySelector('.hamburger');
    const navLinks: HTMLElement | null = document.querySelector('.nav-links');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50 && header) {
            header.classList.add('scrolled');
        } else if (header) {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks && hamburger) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            if (targetId) {
                const targetElement = document.querySelector(targetId) as HTMLElement;
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Project filtering
    const filterButtons: NodeListOf<Element> = document.querySelectorAll('.filter-btn');
    const projectCards: NodeListOf<Element> = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function(this: HTMLElement) {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    (card as HTMLElement).style.display = 'block';
                } else {
                    (card as HTMLElement).style.display = 'none';
                }
            });
        });
    });
    
    // Form submission
    const contactForm: HTMLFormElement | null = document.getElementById('contactForm') as HTMLFormElement;
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send the form data to a server
            alert('Thank you for your message! This is a demo form, so no message was actually sent.');
            contactForm.reset();
        });
    }
    
    // Scroll animations
    const fadeElements: NodeListOf<Element> = document.querySelectorAll('.fade-in');
    
    function checkFade(): void {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    }
    
    // Initial check
    checkFade();
    
    // Check on scroll
    window.addEventListener('scroll', checkFade);
    
    // Theme Switching Functionality
    const themeToggle: HTMLElement | null = document.getElementById('theme-toggle');
    const themeOptions: HTMLElement | null = document.querySelector('.theme-options');
    const themeOptionItems: NodeListOf<Element> = document.querySelectorAll('.theme-option');
    
    // Toggle theme options panel
    if (themeToggle && themeOptions) {
        themeToggle.addEventListener('click', function(event) {
            themeOptions.classList.toggle('active');
            event.stopPropagation(); // Prevent click from bubbling to document
        });
        
        // Close theme options when clicking outside
        document.addEventListener('click', function(event) {
            if (themeToggle && themeOptions && 
                !themeToggle.contains(event.target as Node) && 
                !themeOptions.contains(event.target as Node)) {
                themeOptions.classList.remove('active');
            }
        });
        
        // Prevent clicks inside theme options from closing the panel
        themeOptions.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
    
    // Check if there's a saved theme in localStorage
    const savedTheme: string = localStorage.getItem('theme') || 'default';
    document.body.className = savedTheme + '-theme';
    
    // Mark the active theme option
    themeOptionItems.forEach(item => {
        if (item.getAttribute('data-theme') === savedTheme) {
            item.classList.add('active');
        }
    });
    
    // Apply theme when clicking on a theme option
    themeOptionItems.forEach(item => {
        item.addEventListener('click', function(this: HTMLElement) {
            const theme = this.getAttribute('data-theme') || 'default';
            
            // Remove active class from all options
            themeOptionItems.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
            
            // Apply the selected theme
            document.body.className = '';
            document.body.classList.add(theme + '-theme');
            
            // Add light or dark class based on theme type
            if (theme.includes('-dark')) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.add('light-mode');
            }
            
            // Save theme preference to localStorage
            localStorage.setItem('theme', theme);
            
            // Close the theme options panel after a short delay
            if (themeOptions) {
                setTimeout(() => {
                    themeOptions.classList.remove('active');
                }, 300);
            }
        });
    });
    
    // Add light or dark class on initial load
    if (savedTheme.includes('-dark')) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }
    
    // Language Switching Functionality
    const languageBtn: HTMLElement | null = document.querySelector('.language-btn');
    const languageDropdown: HTMLElement | null = document.querySelector('.language-dropdown');
    const languageOptions: NodeListOf<Element> = document.querySelectorAll('.language-dropdown li');
    
    // Toggle language dropdown
    if (languageBtn && languageDropdown) {
        languageBtn.addEventListener('click', function(event) {
            if (languageDropdown.parentElement) {
                languageDropdown.parentElement.classList.toggle('active');
            }
            event.stopPropagation(); // Prevent click from bubbling to document
        });
        
        // Close language dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (languageBtn && languageDropdown && 
                !languageBtn.contains(event.target as Node) && 
                !languageDropdown.contains(event.target as Node) && 
                languageDropdown.parentElement) {
                languageDropdown.parentElement.classList.remove('active');
            }
        });
    }
    
    // Check if there's a saved language in localStorage
    const savedLanguage: string = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
    
    // Update active language option
    languageOptions.forEach(option => {
        if (option.getAttribute('data-lang') === savedLanguage && languageBtn) {
            option.classList.add('active');
            const langCode = option.getAttribute('data-lang') || 'en';
            languageBtn.innerHTML = `${langCode.toUpperCase()} <i class="fas fa-globe"></i>`;
        } else {
            option.classList.remove('active');
        }
    });
    
    // Add click event to language options
    languageOptions.forEach(option => {
        option.addEventListener('click', function(this: HTMLElement, event: Event) {
            const lang = this.getAttribute('data-lang') || 'en';
            
            // Remove active class from all options
            languageOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
            
            // Update button text
            if (languageBtn) {
                languageBtn.innerHTML = `${lang.toUpperCase()} <i class="fas fa-globe"></i>`;
            }
            
            // Apply the selected language
            setLanguage(lang);
            
            // Save language preference to localStorage
            localStorage.setItem('language', lang);
            
            // Close the dropdown
            if (languageDropdown && languageDropdown.parentElement) {
                languageDropdown.parentElement.classList.remove('active');
            }
            
            event.stopPropagation();
        });
    });
    
    /**
     * Set the language for the website
     * @param {string} lang - The language code ('en', 'zh', 'nl')
     */
    function setLanguage(lang: string): void {
        // In a real implementation, this would load language files and update text content
        // For this demo, we'll just log the language change
        console.log(`Language changed to: ${lang}`);
        
        // This would be replaced with actual translation logic
        // Example of how it would work with a translations object:
        /*
        const translations = {
            'en': {
                'home': 'Home',
                'about': 'About',
                'projects': 'Projects',
                'skills': 'Skills',
                'contact': 'Contact',
                // ... more translations
            },
            'zh': {
                'home': '首页',
                'about': '关于',
                'projects': '项目',
                'skills': '技能',
                'contact': '联系',
                // ... more translations
            },
            // ... other languages
        };
        
        // Get all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        */
    }
});
