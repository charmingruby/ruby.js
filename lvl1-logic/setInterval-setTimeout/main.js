function showTime() {
    const date = new Date();

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(() => {
    console.log(showTime());
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 10000);

setTimeout(() => {
    console.log('Hello World');
}, 1000);