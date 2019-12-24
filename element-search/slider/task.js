let nextClick = document.querySelector('.slider__arrow_next');

let previousClick = document.querySelector('.slider__arrow_prev')

let allPictures = document.querySelectorAll('.slider__item')

let dots = document.querySelectorAll('.slider__dot')

console.log(dots.length)

function abc() {

    let doc = document.querySelector('.slider__item_active')

    if (!doc.nextElementSibling) {

        doc.classList.remove('slider__item_active')
        allPictures[0].classList.add('slider__item_active')

    } else {

        doc.nextElementSibling.classList.add('slider__item_active')

        doc.classList.remove('slider__item_active')
    }
}

nextClick.addEventListener('click', abc)
previousClick.addEventListener('click', abc)

for (let i of dots) {
    i.addEventListener('click', function bce() {

    })
}