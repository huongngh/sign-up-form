const password = document.getElementByID("password");
const confirmPassword = document.getElementByID("confirmPassword");

password.addEventListener("input", (event) => {
    if (password.validity.typeMismatch) {
        password.setCustomValidity("I am expecting a password!");
    } else {
        password.setCustomValidity("");
    }
});

confirmPassword.addEventListener("input", (event) => {
    if (confirmPassword.value === password.value) {}
})