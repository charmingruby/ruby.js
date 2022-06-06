const paragraph = document.querySelector('.paragraph');
const ps = paragraph.querySelectorAll('p');

const bodyStyles = getComputedStyle(document.body);
const bgBody = bodyStyles.backgroundColor;

ps.forEach((el) => {
    el.style.backgroundColor = bgBody;
    el.style.color = '#fff';
});

