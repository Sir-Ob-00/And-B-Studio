document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const contactForm = document.querySelector('.contact-form');
    const submitButton = document.querySelector('.submit-button');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Validate form fields
        if (!name || !email || !subject || !message) {
            showAlert('Please fill in all required fields', 'error');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showAlert('Please enter a valid email address', 'error');
            return;
        }

        showAlert('Message sent successfully! We will get back to you soon.', 'success');

        contactForm.reset();
    });

    // Function to show alert message
    function showAlert(message, type) {
        
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert ${type}`;
        alertDiv.textContent = message;

        
        alertDiv.style.position = 'fixed';
        alertDiv.style.top = '20px';
        alertDiv.style.left = '50%';
        alertDiv.style.transform = 'translateX(-50%)';
        alertDiv.style.padding = '15px 30px';
        alertDiv.style.borderRadius = '5px';
        alertDiv.style.color = '#fff';
        alertDiv.style.fontWeight = 'bold';
        alertDiv.style.zIndex = '1000';
        alertDiv.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        alertDiv.style.transition = 'all 0.3s ease';

        if (type === 'success') {
            alertDiv.style.backgroundColor = '#2ecc71';
        } else {
            alertDiv.style.backgroundColor = '#e74c3c';
        }

        document.body.appendChild(alertDiv);

        // Remove alert after 3 seconds
        setTimeout(() => {
            alertDiv.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(alertDiv);
            }, 300);
        }, 3000);
    }

    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
}); 