let action = document.querySelectorAll('.menu__link');

for (let i of action) {

    let parent = i.closest('.menu__item');

    i.addEventListener('click', function abc(event) {

        if (parent.querySelector('.menu_sub') && parent.querySelector('.menu_active')) {
            parent.querySelector('.menu_active').classList.remove('menu_active');
            event.preventDefault();
        } else if (parent.querySelector('.menu_sub')) {

            if (document.querySelector('.menu_active')) {
                document.querySelector('.menu_active').classList.remove('menu_active');
                event.preventDefault();
            }
            parent.querySelector('.menu_sub').classList.add('menu_active');
            event.preventDefault();
        }
    })
}