function Calculator() {
    this.display = document.querySelector('.display');

    this.start = () => {
        this.buttonClick();
        this.clearDisplay();
        this.pressEnter();
    }

    this.buttonClick = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnToDisplay(el.innerText);
            }
            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }
            if (el.classList.contains('btn-del')) {
                this.deleteOne();
            }
            if (el.classList.contains('btn-eq')) {
                this.count();
            }
        });
    }

    this.btnToDisplay = (value) => {
        this.display.value += value;
    }

    this.clearDisplay = () => {
        this.display.value = '';
    }

    this.deleteOne = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.count = () => {
        let count = this.display.value;

        try {
            count = eval(count);
            this.display.value = String(count);
        } catch (e) {
            this.display.value = 'Error'
            setTimeout(() => {
                this.clearDisplay();
            }, 2000)
        }
    }

    this.pressEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode == 13) {
                this.count();
            }
        });
    }
}

const calculator = new Calculator();
calculator.start();