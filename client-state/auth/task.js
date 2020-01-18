let signin = document.getElementById('signin');
let form = document.getElementById('signin__form');
let button = document.getElementById('signin__btn');
let welcome = document.getElementById('welcome');
let inputFields = document.querySelectorAll('.control');


signin.classList.add('signin_active');

form.addEventListener('submit', function answer(e) {

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.addEventListener('load', function response(e) {

        let data = JSON.parse(xhr.responseText);
        let userId = document.getElementById('user_id');

        if (data.success === true) {

            localStorage.id = data.user_id;
            userId.textContent = localStorage.id;

            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
        }
        if (data.success === false) {
            signin.classList.remove('signin_active');
            alert('Неверный логин/пароль');

            signin.classList.add('signin_active');
            for (let i = 0; i < inputFields.length; i++) {
                inputFields[i].value = '';
            }
        }
    })
    xhr.send(formData);
    e.preventDefault();
})