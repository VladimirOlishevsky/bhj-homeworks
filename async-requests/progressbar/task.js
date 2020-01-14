let form = document.getElementById('form');
let progress = document.getElementById('progress');
let input = document.getElementsByTagName('input');

form.addEventListener('submit', (e) => {

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    function getProgress() {
        if (progress.value === 1.0) {
            alert('Файл загружен');
            progress.value = 0;
            input.file.value = '';
            return;
        }
        progress.value += 0.2;
        setTimeout(getProgress, 1000);
    }
    getProgress();

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);

    e.preventDefault();
})