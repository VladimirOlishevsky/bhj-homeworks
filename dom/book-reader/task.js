let fontSize = document.querySelectorAll('.font-size');

let book = document.querySelector('.book');

let colorText = document.querySelector('.book__control_color');

let colorBG = document.querySelector('.book__control_background')


for (let i = 0; i < fontSize.length; i++) {

    fontSize[i].addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector('.font-size_active').classList.remove('font-size_active');

        fontSize[i].classList.add('font-size_active');

        if (fontSize[i].dataset.size === 'small') {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        }
        if (fontSize[i].dataset.size === 'big') {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        }

        if (!fontSize[i].dataset.size) {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }
    })
}

for (let i = 1; i < colorText.children.length; i++) {

    colorText.children[i].addEventListener('click', (e) => {
        e.preventDefault();

        colorText.querySelector('.color_active').classList.remove('color_active');

        colorText.children[i].classList.add('color_active');

        if (colorText.children[i].classList.contains('color_black')) {
            book.classList.remove('book_color-gray');
            book.classList.remove('book_color-whitesmoke');
        }

        if (colorText.children[i].classList.contains('color_gray')) {
            book.classList.remove('book_color-whitesmoke');
            book.classList.add('book_color-gray');
        }

        if (colorText.children[i].classList.contains('color_whitesmoke')) {
            book.classList.remove('book_color-gray');
            book.classList.add('book_color-whitesmoke');
        }
    })
}

for (let i = 1; i < colorBG.children.length; i++) {

    colorBG.children[i].addEventListener('click', (e) => {
        e.preventDefault();

        colorBG.querySelector('.color_active').classList.remove('color_active');

        colorBG.children[i].classList.add('color_active');

        if (colorBG.children[i].classList.contains('color_white')) {
            book.classList.remove('book_bg-gray');
            book.classList.remove('book_bg-black');
        }

        if (colorBG.children[i].classList.contains('color_black')) {
            book.classList.remove('book_bg-gray');
            book.classList.add('book_bg-black');
        }

        if (colorBG.children[i].classList.contains('color_gray')) {
            book.classList.remove('book_bg-black');
            book.classList.add('book_bg-gray');
        }
    })
}