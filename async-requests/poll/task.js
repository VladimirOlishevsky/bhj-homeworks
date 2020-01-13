let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {

        let choice = JSON.parse(xhr.responseText);
        pollTitle.innerHTML = choice.data.title;

        for (let i = 0; i < choice.data.answers.length; i++) {
            pollAnswers.innerHTML += `<button class="poll__answer">${choice.data.answers[i]}</button>`;

        }
        let pollAnswerButtons = document.querySelectorAll('.poll__answer')
        for (let n = 0; n < pollAnswerButtons.length; n++) {

            pollAnswerButtons[n].addEventListener('click', () => {
                alert('«Спасибо, ваш голос засчитан!»');

                const vote = new XMLHttpRequest;
                vote.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
                vote.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                vote.send(`vote=${choice.id}&answer=${pollAnswerButtons[n]}`);

                vote.addEventListener('readystatechange', () => {
                    if (vote.readyState === vote.DONE) {
                        pollAnswers.innerHTML = ''

                        let voteAnswer = JSON.parse(vote.responseText);

                        for (let x = 0; x < voteAnswer.stat.length; x++) {

                            pollAnswers.innerHTML += `<div class="vote__answer">${voteAnswer.stat[x].answer}: <b>${voteAnswer.stat[x].votes} votes</b></div>`
                        }

                    }
                })
            })
        }
    }
});