let email = document.getElementById('email');
let actEle = document.activeElement;
let emailFiel = document.getElementById('emailFiel');
let emailLeg = document.getElementById('emailLeg');
let password = document.getElementById('password');
let pswLeg = document.getElementById('pswLeg');
let pswFiel = document.getElementById('pswFiel');
let faEye = document.getElementById('faEye');


function test2() {
    let actEle = document.activeElement;
    if (actEle === email) {
        console.log("email");
        emailFiel.style.border = "2px solid #3B6D8C";
        emailLeg.style.color = "#3B6D8C";
        pswFiel.style.border = "1px solid #afafaf";
        pswLeg.style.color = "#afafaf";
    } else if (actEle === password) {
        console.log("password");
        pswFiel.style.border = "2px solid #3B6D8C";
        pswLeg.style.color = "#3B6D8C";
        emailFiel.style.border = "1px solid #afafaf";
        emailLeg.style.color = "#afafaf";
    } else {
        console.log("reset");
        emailFiel.style.border = "1px solid #afafaf";
        emailLeg.style.color = "#afafaf";
        pswFiel.style.border = "1px solid #afafaf";
        pswLeg.style.color = "#afafaf";
    }
}

faEye.addEventListener('click', eyeTgl);
window.addEventListener('click', test2);
window.addEventListener('keydown', test2);

// =========================fa-eye control============================

function eyeTgl() {
    console.log('123');
    if (password.type === 'password') {
        password.type = 'text';
        faEye.src = '../img/eye.svg';
    } else {
        password.type = 'password';
        faEye.src = '../img/invisible.svg';
    }
}
// let togglePassword = document.getElementById('togglePassword')
// $('togglePassword').click(eyeTgl());

// function eyeTgl () {

//     const type = psw.getAttribute('type') === 'password' ? 'text' : 'password';
//     // let pswType = $('password').getAttribute('type');
//     $('#togglePassword').toggleClass('fa-eye-slash');
// }

console.log(faEye);
