const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phoneNumber");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const emailError = document.querySelector("#emailError");
const phoneError = document.querySelector("#phoneError");
const passwordError = document.querySelector("#passwordError");
const confirmError = document.querySelector("#confirmError");

firstName.addEventListener("input", () => {
    if(firstName.value ==="") {
        firstNameError.textContent = "Please enter your first name.";
    }
    else {
        firstNameError.textContent = "";
    }
})

lastName.addEventListener("input", () => {
    if(lastName.value ==="") {
        lastNameError.textContent = "Please enter your last name.";
    }
    else {
        lastNameError.textContent = "";
    }
})

email.addEventListener("input", () => {
    if(email.validity.typeMismatch) {
        emailError.textContent = "Please enter a valid email address e.g. joe@example.com";
    }
    else {
        emailError.textContent = "";
    }
})

phoneNumber.addEventListener("input", () => {
    if(phoneNumber.validity.patternMismatch) {
        phoneError.textContent = "Please enter a 10 digit phone number.";
    }
    else {
        phoneError.textContent = "";
    }
})

password.addEventListener("input", () => {
    if(password.validity.patternMismatch) {
        passwordError.textContent = "Password must contain at least 8\
        characters, one uppercase letter,\
        one lowercase letter and a number.";

    }
    else {
        passwordError.textContent = "";
    }
})

confirmPassword.addEventListener("input", () => {
    if(password.value != confirmPassword.value) {
        confirmError.textContent = "Passwords do not match.";
    }
    else {
        confirmError.textContent = "";
    }
})

