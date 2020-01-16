let modal = document.getElementById('subscribe-modal');

let close = modal.querySelector('div.modal__close_times');

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");

    return parts
    .pop()
    .split(";")
    .shift() 
}

close.onclick = () => {
    modal.classList.remove('modal_active');
    
    document.cookie = 'window=close';
}

if (!document.cookie) {
    modal.classList.add('modal_active');
}

if(getCookie('window') !== 'close') {
    modal.classList.add('modal_active');
}

if(getCookie('window') === 'close') {
    modal.classList.remove('modal_active');
}
