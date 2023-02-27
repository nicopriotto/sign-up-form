const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");
const errorMessage = document.querySelector(".error_message");

function checkPwd() {
    if (password.value === confirm_password.value) {
        password.classList.remove('error');
        confirm_password.classList.remove('error');
        errorMessage.style.display = "none";
    } else {
        password.classList.add('error');
        confirm_password.classList.add('error');
        errorMessage.style.display = "block";
    }
}

confirm_password.addEventListener('input', checkPwd)

password.addEventListener('input', checkPwd)