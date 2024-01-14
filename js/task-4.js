"use strick";

document.querySelector('.login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = this.elements.email;
    const passwordInput = this.elements.password;

    const enteredEmail = emailInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    if (enteredEmail === '' || enteredPassword === '') {
        alert('All form fields must be filled in');
    } else {
        var formData = {
            email: enteredEmail,
            password: enteredPassword
        };

        console.log(formData);

        this.reset();
    }
});
