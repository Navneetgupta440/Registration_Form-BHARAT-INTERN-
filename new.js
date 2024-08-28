document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let valid = true;

        // Clear previous error messages
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

        if (username.value.trim() === '') {
            document.getElementById('username-error').textContent = 'Username is required.';
            valid = false;
        }

        if (!validateEmail(email.value.trim())) {
            document.getElementById('email-error').textContent = 'Invalid email address.';
            valid = false;
        }

        if (password.value.length < 6) {
            document.getElementById('password-error').textContent = 'Password must be at least 6 characters.';
            valid = false;
        }

        if (password.value !== confirmPassword.value) {
            document.getElementById('confirm-password-error').textContent = 'Passwords do not match.';
            valid = false;
        }

        if (valid) {
            formMessage.textContent = 'Registration successful!';
            formMessage.style.backgroundColor = '#d4edda';
            formMessage.style.color = '#155724';
            form.reset();
        } else {
            formMessage.textContent = 'Please fix the errors above.';
            formMessage.style.backgroundColor = '#f8d7da';
            formMessage.style.color = '#721c24';
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
