let reveal = document.querySelectorAll('.reveal');

for (let i = 0; i < reveal.length; i++) {

    document.addEventListener('scroll', () => {

        if (reveal[i].getBoundingClientRect().top < window.innerHeight) {
            reveal[i].classList.add('reveal_active');
        }

    })

}