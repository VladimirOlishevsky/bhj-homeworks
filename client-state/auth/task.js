let signin = document.getElementById('signin');
let form = document.getElementById('signin__form');
let button = document.getElementById('signin__btn');
let welcome = document.getElementById('welcome');
let userId = document.getElementById('user_id');

signin.classList.add('signin_active');

form.addEventListener('submit', function answer(e) {
 
    

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

    //xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function response(e) {

        let data = JSON.parse(xhr.responseText)
        
        if(xhr.readyState === xhr.DONE && data.success === true) {
            localStorage.id = data.user_id;

            userId.value = data.user_id;
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            

            console.log(userId.value)

        } 
        if(data.success === false) {
            signin.classList.remove('signin_active');
            alert('Неверный логин/пароль');
        }
        // if (xhr.readyState == xhr.DONE && xhr.status == 200) {
        //     var data = JSON.parse(xhr.responseText);
        //     console.log(data);
        // } else {
            
        //     console.log('errr')
        // }

    })
    xhr.send(formData);
    e.preventDefault();
    
})