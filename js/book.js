document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const bookingForm = document.querySelector('.booking-form');
    const submitButton = document.querySelector('.submit-button');

    // Add submit event listener to the form
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const eventType = document.getElementById('event-type').value;
        const eventDate = document.getElementById('event-date').value;
        const message = document.getElementById('message').value;

        // Validate form fields
        if (!name || !email || !phone || !eventType || !eventDate) {
            showAlert('Please fill in all required fields', 'error');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showAlert('Please enter a valid email address', 'error');
            return;
        }

        // Validate phone number format (basic validation)
        const phoneRegex = /^[0-9]{10,}$/;
        if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
            showAlert('Please enter a valid phone number', 'error');
            return;
        }

        // If all validations pass, show success message
        showAlert('Message sent successfully! We will contact you soon.', 'success');
        
        // Reset the form
        bookingForm.reset();
    });

    // Function to show alert message
    function showAlert(message, type) {
        // Create alert element
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert ${type}`;
        alertDiv.textContent = message;

        // Style the alert
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

        // Set background color based on type
        if (type === 'success') {
            alertDiv.style.backgroundColor = '#2ecc71';
        } else {
            alertDiv.style.backgroundColor = '#e74c3c';
        }

        // Add alert to the document
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