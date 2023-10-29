document.addEventListener("DOMContentLoaded", function () {
    var submitbtn = document.getElementById("submitbtn");

    submitbtn.addEventListener("click", function () {
        if (validateForm()) {
            const email = document.getElementById('email').value;

            // Store the email address in local storage
            localStorage.setItem('userEmail', email);

            // Show the signup success alert
            const alert = document.getElementById('signupSuccessAlert');
            alert.classList.add('show');
            window.location.assign('/signin.html');
            // You can redirect the user after form submission
        }
    });

    function validateForm() {
        
        var email = document.forms["myForm"]["email"].value;
        var password = document.forms["myForm"]["password"].value;
        var firstname = document.forms["myForm"]["firstname"].value;
        var lastname = document.forms["myForm"]["lastname"].value;

        var confirmpassword = document.forms["myForm"]["confirm-password"].value;

        // Regular expression to validate email
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Check if the email is valid
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return false;
        }

        if (firstname.trim() === '' || lastname.trim() === '') {
            alert("Please enter both your first and last name.");
            return false;
        }
        // Check if the password is at least 6 characters long
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return false;
        }

        if (confirmpassword !== password) {
            alert("Confirm password does not match with Password");
            return false;
        }

        // If both email and password are valid, the form can be submitted
        return true;
    }
});