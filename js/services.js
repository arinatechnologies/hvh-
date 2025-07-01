// Service Card Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover class to service cards for better mobile experience
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.classList.add('hover-effect');
        });
        
        card.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('hover-effect');
            }, 300);
        });
    });
    
    // Simple testimonial slider for mobile
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-card');
    const testimonialContainer = document.querySelector('.testimonial-container');
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }
    
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }
    
    // Only enable slider on mobile
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            testimonialContainer.style.display = 'block';
            showTestimonial(currentTestimonial);
            setInterval(nextTestimonial, 5000);
        } else {
            testimonialContainer.style.display = 'grid';
            testimonials.forEach(testimonial => {
                testimonial.style.display = 'block';
            });
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});