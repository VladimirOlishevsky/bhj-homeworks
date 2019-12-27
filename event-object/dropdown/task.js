let dropList = document.querySelector('.dropdown__list');

let dropValue = document.querySelector('.dropdown__value');

let dropItem = document.querySelectorAll('.dropdown__item')

dropValue.addEventListener('click', () => {
    dropList.classList.toggle('dropdown__list_active');
})


for(let i = 0; i < dropItem.length; i++){

    dropItem[i].addEventListener('click', (e) => {
        e.preventDefault();

        dropList.classList.remove('dropdown__list_active');

        dropValue.textContent = dropItem[i].textContent;
} )

}

