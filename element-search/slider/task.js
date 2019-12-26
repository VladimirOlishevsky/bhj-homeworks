let nextClick = document.querySelector('.slider__arrow_next');

let previousClick = document.querySelector('.slider__arrow_prev')

let allPictures = document.querySelectorAll('.slider__item')

let dots = document.querySelectorAll('.slider__dot')

function abc() {

    let active = document.querySelector('.slider__item_active')

    if (!active.nextElementSibling) {

        active.classList.remove('slider__item_active')
        allPictures[0].classList.add('slider__item_active')

    } else {

        active.nextElementSibling.classList.add('slider__item_active')

        active.classList.remove('slider__item_active')
    }
}

nextClick.addEventListener('click', abc)
previousClick.addEventListener('click', abc)



for (let i = 0; i < dots.length; i++) {

    dots[i].addEventListener("click", function() {

        let active = document.querySelector('.slider__item_active')

        if(active){
            active.classList.remove('slider__item_active')
        }

        allPictures[i].classList.add('slider__item_active')

    });
}

