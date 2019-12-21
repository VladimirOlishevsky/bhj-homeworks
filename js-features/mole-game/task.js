let dead = document.getElementById('dead');
let lost = document.getElementById('lost');


function getHole(index) {

    return document.getElementById('hole' + index);
}

for (let i = 1; i <= 9; i++) {
    let hole = getHole(i);

    hole.onclick = function name() {
        if (hole.className.includes('hole_has-mole')) {
            dead.textContent++
                if (dead.textContent === '10') {
                    setTimeout(() => {
                        alert('CONGRATILATIONS!!!!');
                        dead.textContent = 0;
                        lost.textContent = 0;
                    }, 100);
                }
        } else {
            lost.textContent++
                if (lost.textContent === '5') {
                    setTimeout(() => {
                        alert('SORRY, YOU LOSE....');
                        dead.textContent = 0;
                        lost.textContent = 0;
                    }, 100);
                }
        }
    }
}