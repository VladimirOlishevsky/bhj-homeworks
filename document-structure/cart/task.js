let more = document.querySelectorAll('.product__quantity-control_inc');
let less = document.querySelectorAll('.product__quantity-control_dec');

let quantity = document.querySelectorAll('.product__quantity-value');
let cartAdd = document.querySelectorAll('.product__add');
let cartProducts = document.querySelector('.cart__products');
let product = document.querySelectorAll('.product');


for (let i = 0; i < more.length; i++) {

    more[i].addEventListener('click', () => {
        quantity[i].textContent++;
    })

    less[i].addEventListener('click', () => {
        quantity[i].textContent--;

        if (quantity[i].textContent < '0') {
            quantity[i].textContent = '0'
        }
    })

    cartAdd[i].addEventListener('click', () => {

        for (let n = 0; n < cartProducts.children.length; n++) {

            if (cartProducts.children[n].dataset.id === product[i].dataset.id) {

                return cartProducts.children[n].querySelector('.cart__product-count').textContent = Number(cartProducts.children[n].querySelector('.cart__product-count').textContent) + Number(quantity[i].textContent);
            }
        }
        cartProducts.insertAdjacentHTML('afterbegin', `<div class="cart__product" data-id="${product[i].dataset.id}"><img class= "cart__product-image" src = "${product[i].querySelector('img').getAttribute('src')}"><div class="cart__product-count">${quantity[i].textContent}</div><div class = 'product__delete'>Удалить</div></div >`);

        cartProducts.children[0].querySelector('.product__delete').onclick = function name() {
            this.closest('.cart__product').remove();
        }
    })
}