var userName = document.getElementById('name');
var userEmail = document.getElementById('email');
var userPassward = document.getElementById('passward');
var signUpBtn = document.getElementById('sign-up');
var repeatMsg = document.getElementById('repeatedEmail');
var successMsg = document.getElementById('success');
var signInLink = document.getElementById('sign-in');

var userDataContainer = [];

if (localStorage.getItem("userInfo") !== null) {
    userDataContainer = JSON.parse(localStorage.getItem("userInfo"));
}

signUpBtn.addEventListener('click', function () {
    if (validationEmail() && validationName() && validationPassward()) {
        var userData = {
            name: userName.value,
            email: userEmail.value,
            passward: userPassward.value,
        };

        var isDuplicate = userDataContainer.some(function (user) {
            return user.email === userEmail.value;
        });

        if (isDuplicate) {
            repeatMsg.classList.remove('d-none');
            successMsg.classList.add('d-none');
        } else {
            successMsg.classList.remove('d-none');
            repeatMsg.classList.add('d-none');
            userDataContainer.push(userData);
            localStorage.setItem("userInfo", JSON.stringify(userDataContainer));
            clearData();
        }
    }
});

function validationEmail() {
    var email = userEmail.value;
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var notValid = document.getElementById('not-valid');

    if (regex.test(email)) {
        userEmail.classList.add('is-valid');
        userEmail.classList.remove('is-invalid');
        notValid.classList.add('d-none');
        return true;
    } else {
        userEmail.classList.add('is-invalid');
        userEmail.classList.remove('is-valid');
        notValid.classList.remove('d-none');
        return false;
    }
}

function validationPassward() {
    var passward = userPassward.value;
    var msgPassward = document.getElementById('msgPassward');
    var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    if (regex.test(passward)) {
        userPassward.classList.add('is-valid');
        userPassward.classList.remove('is-invalid');
        msgPassward.classList.add('d-none');
        return true;
    } else {
        userPassward.classList.add('is-invalid');
        userPassward.classList.remove('is-valid');
        msgPassward.classList.remove('d-none');
        return false;
    }
}

function validationName() {
    var name = userName.value;
    var msgName = document.getElementById('msgName');
    var regex = /^[a-zA-z][a-zA-Z0-9]{2,20}$/;

    if (regex.test(name)) {
        userName.classList.add('is-valid');
        userName.classList.remove('is-invalid');
        msgName.classList.add('d-none');
        return true;
    } else {
        userName.classList.add('is-invalid');
        userName.classList.remove('is-valid');
        msgName.classList.remove('d-none');
        return false;
    }
}

function clearData() {
    userName.value = null;
    userEmail.value = null;
    userPassward.value = null;
}
