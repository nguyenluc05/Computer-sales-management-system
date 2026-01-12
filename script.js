// This function can be used for both login and register forms
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', function(event) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required]');

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                alert(`${input.previousElementSibling.innerText} is required.`);
                input.focus();
                event.preventDefault();
                return;
            }
        });

        // Specific validation for register form
        if (formId === 'registerForm') {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                isValid = false;
                alert("Passwords do not match.");
                document.getElementById('confirm-password').focus();
                event.preventDefault();
            }
        }

        if (isValid) {
            alert("Form submitted successfully!");
            // Prevent actual form submission and redirect to a new page
            event.preventDefault();
            if (formId === 'loginForm') {
                window.location.href = 'profile.html';
            } else if (formId === 'registerForm') {
                window.location.href = 'login.html';
            }
        }
    });
}

// Call the validation functions for each relevant form
document.addEventListener('DOMContentLoaded', () => {
    validateForm('loginForm');
    validateForm('registerForm');
    validateForm('contactForm');
});
// This function can be used for both login and register forms
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        let isValid = true;
        const inputs = form.querySelectorAll('input[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                alert(`${input.previousElementSibling.innerText} is required.`);
                input.focus();
                return; // Stop checking other inputs
            }
        });

        // Specific validation for the register form
        if (formId === 'registerForm' && isValid) {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                isValid = false;
                alert("Passwords do not match.");
                document.getElementById('confirm-password').focus();
            }
        }
        
        // If all validation passes
        if (isValid) {
            if (formId === 'registerForm') {
                alert("Registration successful! Please log in with your new account.");
                // Redirect to the login page
                window.location.href = 'login.html';
            } else if (formId === 'loginForm') {
                // For the login form, you might redirect to the profile page
                alert("Login successful!");
                window.location.href = 'profile.html';
            }
        }
    });
}

// Call the validation functions for each relevant form
document.addEventListener('DOMContentLoaded', () => {
    validateForm('loginForm');
    validateForm('registerForm');
    validateForm('contactForm');
});
// This function can be used for both login and register forms
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        let isValid = true;
        const inputs = form.querySelectorAll('input[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                alert(`${input.previousElementSibling.innerText} is required.`);
                input.focus();
                return; // Stop checking other inputs
            }
        });

        // Specific validation for the register form
        if (formId === 'registerForm' && isValid) {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                isValid = false;
                alert("Passwords do not match.");
                document.getElementById('confirm-password').focus();
            }
        }
        
        // If all validation passes
        if (isValid) {
            if (formId === 'registerForm') {
                alert("Đăng kí tài khoản thành công!");
                // Redirect to the login page after a short delay
                window.location.href = 'login.html';
            } else if (formId === 'loginForm') {
                // For the login form, you might redirect to the profile page
                alert("Login successful!");
                window.location.href = 'profile.html';
            } else if (formId === 'contactForm') {
                alert("Form submitted successfully!");
            }
        }
    });
}

// Call the validation functions for each relevant form
document.addEventListener('DOMContentLoaded', () => {
    validateForm('loginForm');
    validateForm('registerForm');
    validateForm('contactForm');
});
// Function to handle tab switching
function showProducts(category) {
    // Hide all product grids
    const allGrids = document.querySelectorAll('.tab-content');
    allGrids.forEach(grid => {
        grid.classList.remove('active');
    });

    // Show the selected product grid
    const activeGrid = document.getElementById(category);
    if (activeGrid) {
        activeGrid.classList.add('active');
    }

    // Update active button
    const allButtons = document.querySelectorAll('.tab-link');
    allButtons.forEach(button => {
        button.classList.remove('active');
    });
    const activeButton = document.querySelector(`.tab-link[onclick="showProducts('${category}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}
// This function can be used for both login and register forms
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        let isValid = true;
        const inputs = form.querySelectorAll('input[required]');

        for (const input of inputs) {
            if (!input.value.trim()) {
                isValid = false;
                alert(`${input.previousElementSibling.innerText} is required.`);
                input.focus();
                return; // Stop the function here
            }
        }

        // Specific validation for the register form
        if (formId === 'registerForm' && isValid) {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                isValid = false;
                alert("Passwords do not match.");
                document.getElementById('confirm-password').focus();
                return;
            }
        }

        // If all validation passes
        if (isValid) {
            if (formId === 'registerForm') {
                alert("Đăng kí tài khoản thành công!");
                // Redirect to the login page
                window.location.href = 'login.html';
            } else if (formId === 'loginForm') {
                alert("Login successful!");
                window.location.href = 'profile.html';
            } else if (formId === 'contactForm') {
                alert("Form submitted successfully!");
            }
        }
    });
}

// Function to handle tab switching
function showProducts(category) {
    // Hide all product grids
    const allGrids = document.querySelectorAll('.tab-content');
    allGrids.forEach(grid => {
        grid.classList.remove('active');
    });

    // Show the selected product grid
    const activeGrid = document.getElementById(category);
    if (activeGrid) {
        activeGrid.classList.add('active');
    }

    // Update active button
    const allButtons = document.querySelectorAll('.tab-link');
    allButtons.forEach(button => {
        button.classList.remove('active');
    });
    const activeButton = document.querySelector(`.tab-link[onclick="showProducts('${category}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Call the validation functions for each relevant form
document.addEventListener('DOMContentLoaded', () => {
    validateForm('loginForm');
    validateForm('registerForm');
    validateForm('contactForm');
});
