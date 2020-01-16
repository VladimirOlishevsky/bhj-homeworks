let signin = document.getElementById('signin');
let form = document.getElementById('signin__form');
let button = document.getElementById('signin__btn');

signin.classList.add('signin_active');

form.addEventListener('submit', () => {

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

    xhr.addEventListener('readystatechange', (e) => {

        // e.preventDefault()
        // console.log(xhr.readyState)
        if (xhr.readyState === xhr.DONE) {

            console.log(xhr.readyState)
        } else {
            console.log(Error);

        }

    })
    xhr.send(formData)
})