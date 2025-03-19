// JavaScript for handling form validations and interactions

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     // Add login logic here
//     alert('Login functionality not implemented yet.');
// });

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.style.display = 'none');

    let isValid = true;

    // Validate First Name
    const firstName = document.getElementById('firstName').value;
    if (!firstName) {
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    }

    // Validate Last Name
    const lastName = document.getElementById('lastName').value;
    if (!lastName) {
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (!password) {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Validate Re-Enter Password
    const rePassword = document.getElementById('rePassword').value;
    if (password !== rePassword) {
        document.getElementById('rePasswordError').style.display = 'block';
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        alert('Signup successful!');
        // Here you can add logic to send data to the server
    }
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add forgot password logic here
    alert('Forgot password functionality not implemented yet.');
});

