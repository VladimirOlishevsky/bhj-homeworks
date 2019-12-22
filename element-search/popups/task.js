let firstWindow = document.getElementById('modal_main');
let secondWindow = document.getElementById('modal_success');

let closeFirstWindow = firstWindow.querySelector('div.modal__close');
let closeSecondWindow = secondWindow.querySelector('div.modal__close');

let showSecond = firstWindow.querySelector('a.show-success');

firstWindow.classList.add('modal_active');

closeFirstWindow.onclick = function closeFirst() {
    firstWindow.classList.remove('modal_active');
}

showSecond.onclick = function goToSecond() {
    firstWindow.classList.remove('modal_active');
    secondWindow.classList.add('modal_active');
}

closeSecondWindow.onclick = function closeSecond() {
    secondWindow.classList.remove('modal_active');
    firstWindow.classList.remove('modal_active');
}