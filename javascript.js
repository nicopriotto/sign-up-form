const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

function checkPwd() {
    if (password.value === confirm_password.value) {
        password.classList.remove('error');
        confirm_password.classList.remove('error');
        console.log("sii")
    } else {
        password.classList.add('error');
        confirm_password.classList.add('error');
    }
}

confirm_password.addEventListener('input', checkPwd)

password.addEventListener('input', checkPwd)