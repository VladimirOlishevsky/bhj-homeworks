let rotatorCase = document.querySelectorAll('.rotator__case');

let rotator = document.querySelector('.rotator');

document.querySelector('.rotator__case_active').style.color = document.querySelector('.rotator__case_active').dataset.color


let interval = setInterval(() => {

    document.querySelector('.rotator__case_active').nextElementSibling.classList.add('rotator__case_active')
    document.querySelector('.rotator__case_active').classList.remove('rotator__case_active')
    document.querySelector('.rotator__case_active').style.color = document.querySelector('.rotator__case_active').dataset.color


    if (!document.querySelector('.rotator__case_active').nextElementSibling) {
        setTimeout(() => {
            document.querySelector('.rotator__case_active').classList.remove('rotator__case_active');
            rotatorCase[0].classList.add('rotator__case_active')
        }, document.querySelector('.rotator__case_active').dataset.speed);

    }


}, 1000);