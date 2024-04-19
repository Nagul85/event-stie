function saveData() {
    // Reset error messages
    resetErrorMessages();

    // Get form inputs
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const passwordInput = document.getElementById('password');
    const institutionNameInput = document.getElementById('institutionName');
    const institutionIDInput = document.getElementById('institutionID');
    const agreeCheckbox = document.getElementById('agree');

    // Validation flag
    let isValid = true;

    // Validation rules
    if (firstNameInput.value.length < 6) {
        displayError('firstNameError', 'First name must be at least 6 characters long.');
        isValid = false;
    }

    if (lastNameInput.value.length < 6) {
        displayError('lastNameError', 'Last name must be at least 6 characters long.');
        isValid = false;
    }

    if (!isValidEmail(emailInput.value)) {
        displayError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    if (!isValidPhoneNumber(phoneNumberInput.value)) {
        displayError('phoneNumberError', 'Please enter a valid phone number.');
        isValid = false;
    }

    if (passwordInput.value.length < 6) {
        displayError('passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    }

    if (institutionNameInput.value.length < 6) {
        displayError('institutionNameError', 'Institution name must be at least 6 characters long.');
        isValid = false;
    }

    if (institutionIDInput.value.length < 6) {
        displayError('institutionIDError', 'Institution ID must be at least 6 characters long.');
        isValid = false;
    }

    if (!agreeCheckbox.checked) {
        alert('Please agree to the Terms & Conditions.');
        isValid = false;
    }

    // Submit the form if valid
    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can submit the form data to your server or perform other actions
    }
}

// Function to display error messages
function displayError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.innerText = message;
}

// Function to reset error messages
function resetErrorMessages() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.innerText = '';
    });
}

// Function to validate email address format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate phone number format
function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}
