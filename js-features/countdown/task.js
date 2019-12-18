let timer = document.getElementById('timer');

function abc() {

    if (timer.textContent === '0') {
        clearInterval(time);
        setTimeout(() => {
            alert('Вы победили в конкурсе!');
        }, 500);
    }
}

let time = setInterval(() => {
    timer.textContent--;
    abc();
}, 1000);