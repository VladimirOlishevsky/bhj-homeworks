let hasTooltip = document.querySelectorAll('.has-tooltip');


for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].addEventListener('click', (event) => {

        event.preventDefault();

        if (hasTooltip[i].querySelector('.tooltip')) {
            hasTooltip[i].querySelector('.tooltip').remove()
            return
        } else if (document.querySelector('.tooltip')) {
            document.querySelector('.tooltip').remove();

        }
        hasTooltip[i].insertAdjacentHTML('beforeend', `<div class="tooltip" style="left: ${hasTooltip[i].getBoundingClientRect().left}px; top: ${hasTooltip[i].getBoundingClientRect().top}+ 20px" data-position='left'>${hasTooltip[i].title}</div>`);

        let tooltip = document.querySelector('.tooltip');

        tooltip.style.display = 'block';
        tooltip.style.position = 'absolute';

    })

}