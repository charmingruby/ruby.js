const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputWeight = e.target.querySelector('#weight')
    const inputHeight = e.target.querySelector('#height')

    const weight = Number(inputWeight.value)
    const height = Number(inputHeight.value)

    if(!weight || !height) {
        setResult('Invalid infos', false)
        return;
    }

    const bmi = getBmi(weight, height)
    const bmiLvl = getBmiLevel(bmi)
    const msg = 'Your BMI is ' + bmi + ' (' + bmiLvl + ').'

    setResult(msg, true)
})

function getBmi (w,h) {

    const bmi = w/h**2

    return bmi.toFixed(2)
}

function getBmiLevel (bmi) {

    const levels = ['Under Weight', 'Normal Weight', 'Overweight', 'Obese: 1', 'Obese: 2', 'Obese: 3']

    if (bmi < 18.5)
        return levels[0]

    else if (bmi >= 18.5 && bmi <= 24.9)
        return levels[1]

        else if (bmi >= 25 && bmi <= 29.9)   
            return levels[2]

            else if (bmi >= 30 && bmi <= 34.9)
                return levels[3]

                else if (bmi >= 35 && bmi <= 39.9)
                    return levels[4]

                    else
                        return levels[5]
}

function createP (className) {
    const p = document.createElement('p')
    return p
}

function setResult (msg, isValid) {
    const result = document.querySelector('#result')
    result.innerHTML = ''
    const p = createP()

    if(isValid)
        p.classList.add('p-confirm')

    else
        p.classList.add('p-invalid')

    p.innerHTML = msg
    result.appendChild(p)
}