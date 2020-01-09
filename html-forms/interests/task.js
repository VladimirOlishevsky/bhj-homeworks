let foodCheck = document.querySelector('ul');

let first = foodCheck.children[0].querySelector('.interest__check');
let second = foodCheck.children[1].querySelector('.interest__check');

let kindOfFood = first.closest('label').nextElementSibling.querySelectorAll('.interest__check');
let kindOfAnimal = second.closest('label').nextElementSibling.querySelectorAll('.interest__check');

first.onchange = () => {

    for (let i = 0; i < kindOfFood.length; i++) {

        if (first.checked) {
            first.closest('label').nextElementSibling.querySelectorAll('.interest__check')[i].checked = true
        } else {
            first.closest('label').nextElementSibling.querySelectorAll('.interest__check')[i].checked = false
        }
    }
}

second.onchange = () => {

    for (let i = 0; i < kindOfAnimal.length; i++) {

        if (second.checked) {
            second.closest('label').nextElementSibling.querySelectorAll('.interest__check')[i].checked = true
        } else {
            second.closest('label').nextElementSibling.querySelectorAll('.interest__check')[i].checked = false
        }
    }
}