let cookie = document.getElementById('cookie');

let clicker = document.getElementById('clicker__counter');

function changeSizes() {
    if (cookie.width === 200) {
        cookie.width = 150;
    } else if (cookie.width === 150) {
        cookie.width = 200;
    }
    clicker.textContent++;

}

cookie.onclick = changeSizes;