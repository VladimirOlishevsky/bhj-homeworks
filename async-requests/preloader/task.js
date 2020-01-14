let loader = document.getElementById('loader');
let items = document.getElementById('items')

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener('readystatechange', () => {

    if (xhr.readyState === xhr.DONE) {

        loader.classList.remove('loader_active');
        let data = JSON.parse(xhr.responseText);

        for (let valute in data.response.Valute) {

            items.innerHTML += `<div class="item">
            <div class="item__code">${data.response.Valute[valute].CharCode}</div>
            <div class="item__value">${data.response.Valute[valute].Value}</div>
            <div class="item__currency">руб.</div>
            </div>
            `
        }
    }
})