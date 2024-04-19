document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Prevent form submission by default
    event.preventDefault();

    // Retrieve the input values
    const nameInput = document.getElementById("name").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const phoneNumberInput = document.getElementById("phoneNumber").value.trim();
    const passwordInput = document.getElementById("password").value;

    // Validate input values
    displayErrorMessage("name", !isValidName(nameInput), "Username must contain only alphabets and spaces, with a minimum of 6 characters.");
    displayErrorMessage("email", !isValidEmail(emailInput), "Please enter a valid email address.");
    displayErrorMessage("phoneNumber", !isValidPhoneNumber(phoneNumberInput), "Phone number must contain exactly 10 digits.");
    displayErrorMessage("password", !isValidPassword(passwordInput), "Password must be at least 8 characters long.");

    // If all validations pass, submit the form
    if (isValidName(nameInput) && isValidEmail(emailInput) && isValidPhoneNumber(phoneNumberInput) && isValidPassword(passwordInput)) {
        this.submit();
    }
});

// Function to validate username format
function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]{6,}$/;
    return namePattern.test(name);
}

// Function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate phone number format
function isValidPhoneNumber(phoneNumber) {
    return /^\d{10}$/.test(phoneNumber);
}

// Function to validate password format
function isValidPassword(password) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
}

// Function to display error message
function displayErrorMessage(inputId, condition, message) {
    const errorSpan = document.getElementById(`${inputId}Error`);
    if (condition) {
        errorSpan.textContent = message;
        errorSpan.classList.add("error-visible");
    } else {
        errorSpan.textContent = "";
        errorSpan.classList.remove("error-visible");
    }
}


// Login css
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Prevent form submission by default
    event.preventDefault();

    // Retrieve the email and password input values
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value;

    // Validate email
    if (!isValidEmail(emailInput)) {
        // Display error message for email
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        return; // Exit function to prevent further validation
    }

    // Validate password
    if (!isValidPassword(passwordInput)) {
        // Display error message for password
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long.";
        return; // Exit function to prevent further validation
    }

    // If all validations pass, submit the form
    this.submit();
});

// Function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate password format
function isValidPassword(password) {
    return password.length >= 8;
}








// Explore More starts


document.addEventListener("DOMContentLoaded", function() {
  const imageData = [
    { src: "./img/Rectangle 7 (1).png", name: "Image 1", caption: "Music Concert",location: "Chennai",  date: "12th April", buttonText: "View" },
    { src: "./img/Rectangle 8.png", name: "Image 2",  caption: "Technical Workshop", location: "Chennai",  date: "12th April", buttonText: "View" },
    { src: "./img/Rectangle 9.png", name: "Image 3", caption: "Footstrap Champs",location: "Kovai ",  date: "8th April", buttonText: "View" },
    { src: "./img/Rectangle 9.png", name: "Image 4", caption: "Caption 4",location: "Trichy",  date: "12th April", buttonText: "View" },
    { src: "./img/5.png", name: "Image 5", caption: "Caption 5",location: "SRM,Chennai",  date: "21th April", buttonText: "View" },
    // Add more image data as needed
  ];

  const imageContainer = document.getElementById("imageContainer");
  let currentSlide;

  imageData.forEach((data, index) => {
    if (index % 3 === 0) {
      currentSlide = document.createElement("div");
      currentSlide.classList.add("swiper-slide");
      imageContainer.appendChild(currentSlide);
    }

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    const imageElement = document.createElement("img");
    imageElement.src = data.src;
    imageElement.alt = data.name;

    const imageCaption = document.createElement("div");
    imageCaption.classList.add("image-caption");
    imageCaption.textContent = data.caption;

    const imageCaptionLeft = document.createElement("div");
    imageCaptionLeft.classList.add("image-caption", "image-caption-left");
    imageCaptionLeft.textContent = data.date;

    const imageCaptionBelowDate = document.createElement("div");
    imageCaptionBelowDate.classList.add("image-caption", "image-caption-BelowDate");
    imageCaptionBelowDate.textContent = data.location;

    const imageCaptionRight = document.createElement("div");
    imageCaptionRight.classList.add("image-caption", "image-caption-right");
    imageCaptionRight.innerHTML = `<button class="view-button">${data.buttonText ? data.buttonText : ''}</button>`;

    imageWrapper.appendChild(imageElement);
    imageWrapper.appendChild(imageCaption);
    imageWrapper.appendChild(imageCaptionLeft);
    imageWrapper.appendChild(imageCaptionBelowDate);
    imageWrapper.appendChild(imageCaptionRight);
    currentSlide.appendChild(imageWrapper);
  });

  // Initialize Swiper
  var swiper = new Swiper('.swiper-container', {
    // Add your Swiper options here
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Add click event listeners to view buttons
  const viewButtons = document.querySelectorAll('.view-button');
  viewButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Add your button click functionality here
      console.log('View button clicked');
    });
  });
});