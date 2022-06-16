function getSec(s) {
    const date = new Date(s * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const timer = document.querySelector('.relogio');
const start = document.querySelector('.iniciar');
const stop = document.querySelector('.pausar');
const reset = document.querySelector('.zerar');

let seconds = 0;
let count;

function startTimer() {
    count = setInterval(() => {
        seconds++;
        timer.innerHTML = getSec(seconds);    
    }, 1000);
}

document.addEventListener('click', (e) => {
    const el = e.target;

    if(el.classList.contains('iniciar')) {
            timer.classList.remove('pausado');
            clearInterval(count);
            startTimer();
    }

    if(el.classList.contains('pausar')) {
            clearInterval(count);
            timer.classList.add('pausado');
    }
    
    if(el.classList.contains('zerar')) {
            clearInterval(count);
            seconds = 0;
            timer.innerHTML = '00:00:00';
    }
});