// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(231, 76, 60, 0.8)';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = '#e74c3c';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Testimonial Slider
const testimonials = [
    {
        quote: "Amazing work! The photos captured our special day perfectly.",
        author: "Koffi",
        image: "images/testimonials/Koffi.jpg",
        rating: 4
    },
    {
        quote: "Professional and creative. Highly recommended!",
        author: "Mara",
        image: "images/testimonials/Mara.jpg",
        rating: 4
    },
    {
        quote: "The best photography experience we've ever had.",
        author: "Phresh Prince",
        image: "images/testimonials/Phresh Prince.jpg",
        rating: 5
    }
];

let currentTestimonial = 0;
const testimonialSlider = document.querySelector('.testimonial-slider');

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

function updateTestimonial() {
    if (testimonialSlider) {
        testimonialSlider.innerHTML = `
            <div class="testimonial">
                <div class="client-image">
                    <img src="${testimonials[currentTestimonial].image}" alt="${testimonials[currentTestimonial].author}">
                </div>
                <p>"${testimonials[currentTestimonial].quote}"</p>
                <cite>- ${testimonials[currentTestimonial].author}</cite>
                <div class="rating">
                    ${generateStars(testimonials[currentTestimonial].rating)}
                </div>
            </div>
        `;
    }
}

// Initialize testimonial slider
if (testimonialSlider) {
    updateTestimonial();
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial();
    }, 5000);
} 