// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Search Form Handler
const searchForm = document.querySelector('.search-form');
if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchInput = this.querySelector('input');
        const searchTerm = searchInput.value.trim();
        
        if (searchTerm) {
            // Here you would typically make an AJAX request to your backend
            // For now, we'll just show an alert
            alert(`Searching for: ${searchTerm}`);
            searchInput.value = '';
        }
    });
}

// Category Filter
const categoryLinks = document.querySelectorAll('.categories a');
categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const category = this.getAttribute('data-category');
        
        // Remove active class from all links
        categoryLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
        
        // Here you would typically filter posts based on category
        // For now, we'll just show an alert
        alert(`Filtering by category: ${category}`);
    });
});

// Tag Filter
const tagLinks = document.querySelectorAll('.tags a');
tagLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const tag = this.textContent;
        
        // Here you would typically filter posts based on tag
        // For now, we'll just show an alert
        alert(`Filtering by tag: ${tag}`);
    });
});

// Pagination
const paginationLinks = document.querySelectorAll('.pagination a');
paginationLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.textContent;
        
        // Remove active class from all links
        paginationLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
        
        // Here you would typically load the next page of posts
        // For now, we'll just show an alert
        alert(`Loading page: ${page}`);
    });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lazy Loading Images
const lazyImages = document.querySelectorAll('img[data-src]');
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
} else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// Add active class to current page in navigation
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.parentElement.classList.add('active');
    }
}); 