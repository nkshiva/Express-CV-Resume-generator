function validateForm() {
    let valid = true;

    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    // Regular expressions for validation
    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!firstname.value.match(namePattern)) {
        document.getElementById("firstnameError").textContent = "Invalid first name";
        valid = false;
    } else {
        document.getElementById("firstnameError").textContent = "";
    }

    if (!lastname.value.match(namePattern)) {
        document.getElementById("lastnameError").textContent = "Invalid last name";
        valid = false;
    } else {
        document.getElementById("lastnameError").textContent = "";
    }

    if (!email.value.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Invalid email address";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (!password.value.match(passwordPattern)) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters and include at least one letter and one number";
        valid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    if (password.value !== confirmPassword.value) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
        valid = false;
    } else {
        document.getElementById("confirmPasswordError").textContent = "";
    }

    return valid;
}