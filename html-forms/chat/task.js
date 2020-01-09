let openChat = document.querySelector('.chat-widget');

let input = document.getElementById('chat-widget__input');

let messages = document.querySelector('.chat-widget__messages');

let container = document.querySelector('.chat-widget__messages-container');

openChat.addEventListener('click', () => {
    openChat.classList.add('chat-widget_active');

});

input.addEventListener('keydown', (e) => {

    let date = new Date();

    if (e.key === 'Enter' && input.value !== '') {

        date = new Date().toLocaleString()

        messages.innerHTML += `
        <div class="message message_client">
                        <div class="message__time">${date}</div>
                        <div class="message__text">${input.value}</div>
                    </div>
  <div class="message">
    <div class="message__time">${date}</div>
    <div class="message__text">
      Добрый день, мы ещё не проснулись. Позвоните через 10 лет
    </div>
  </div>
`;
        input.value = '';

        container.scrollTop = container.scrollHeight;

    }
})