let input = document.getElementById('task__input');
let list = document.getElementById('tasks__list');
let button = document.getElementById('tasks__add');
let form = document.querySelector('.tasks__control')


function addToList () {
    
        list.insertAdjacentHTML('afterbegin', `<div class= "task"><div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a></div>`);
        list.children[0].querySelector('.task__remove').onclick = function name() {
            this.closest('.task').remove()
        }
        input.value = '';
}
form.addEventListener('keydown', (e) => {

    if (e.key === 'Enter' && input.value) {
        e.preventDefault();
        addToList()
    }
})

button.addEventListener('click', (e) => {
    if (input.value) {
        e.preventDefault();
        addToList()
    }
})

