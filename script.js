// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Basic scroll into view function
    function scrollToElement(element) {
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    // Scroll to Footer Button
    const scrollToFooterBtn = document.getElementById('scroll-to-footer');
    const footer = document.querySelector('footer');
    
    if (scrollToFooterBtn) {
        scrollToFooterBtn.addEventListener('click', function() {
            scrollToElement(footer);
        });
    }

    // Smooth Scrolling for Navigation Links (only for anchor links)
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for anchor links (starting with #)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                scrollToElement(targetSection);
            }
            // Let regular links (like .html files) work normally
        });
    });

    // Contact Form Submission Handler
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (name && email && message) {
                // Simulate form submission
                formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                formMessage.className = 'success';
                
                // Clear form
                contactForm.reset();
                
                // Clear message after 5 seconds
                setTimeout(() => {
                    formMessage.textContent = '';
                    formMessage.className = '';
                }, 5000);
            } else {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.className = 'error';
            }
        });
    }

    // Console message
    console.log('Website loaded successfully! 🚀');
});

// ============================================
// IMAGE SLIDER FUNCTIONALITY
// ============================================

let currentSlideIndex = 1;

// Initialize slider when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.slider-img')) {
        showSlide(currentSlideIndex);
    }
});

function changeSlide(n) {
    showSlide(currentSlideIndex += n);
}

function currentSlide(n) {
    showSlide(currentSlideIndex = n);
}

function showSlide(n) {
    let slides = document.querySelectorAll('.slider-img');
    let dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return; // Exit if no slider on page
    
    if (n > slides.length) { currentSlideIndex = 1; }
    if (n < 1) { currentSlideIndex = slides.length; }
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Remove active from all dots
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    slides[currentSlideIndex - 1].classList.add('active');
    if (dots.length > 0) {
        dots[currentSlideIndex - 1].classList.add('active');
    }
}

// Optional: Auto-play slider (changes every 5 seconds)
setInterval(() => {
    if (document.querySelector('.slider-img')) {
        changeSlide(1);
    }
}, 5000);