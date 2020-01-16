let editor = document.getElementById('editor');
editor.style.display = 'block';
let button = document.getElementById('button');


if(localStorage.getItem('text') !== null) {
    editor.value = localStorage.getItem('text')
}
editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.value);

})

button.addEventListener('click', () => {
    editor.value = '';
    localStorage.clear();
})