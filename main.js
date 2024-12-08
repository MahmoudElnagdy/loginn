var email = document.getElementById('email');
var passward = document.getElementById('passward');
var loginBtn = document.getElementById('loginBtn');
var reqMsg = document.getElementById('space');

var userDataContainer = JSON.parse(localStorage.getItem("userInfo")) || [];

loginBtn.addEventListener('click', function () {
    if (email.value === '' && passward.value === '') {
        reqMsg.classList.remove('d-none');
    } else {
        var userFound = userDataContainer.some(function (user) {
            return user.email === email.value && user.passward === passward.value;
        });

        if (userFound) {
            reqMsg.classList.add('d-none');
            window.location = './welcome.html'; 
        } else {
            reqMsg.classList.remove('d-none');
        }
    }
});
