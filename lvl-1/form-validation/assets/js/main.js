const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const invMsg = 'Invalid'

    const inputSpeed = e.target.querySelector('#speed')
    const inputTime = e.target.querySelector('#time')

    const speed = Number(inputSpeed.value)  
    const time = Number(inputTime.value)

    if(!speed){
        setResult(invMsg + ' speed', false)
        return
    }
    
    if(!time){
        setResult(invMsg + ' time', false)
        return 
    }

    else{
        const space = getSpace(speed, time)
        const level = getSpaceLevel(space)

        const msg = 'Space traveled: ' + space + ', considered a ' + level + ' distance' 
        setResult(msg, true)
    }
})

function getSpace(speed, time){
    const space = (speed * time).toFixed(2)
    return space
}

function getSpaceLevel(space){
    if(space>=0 && space<=299){ return 'close' }
    else if(space >= 300 && space <= 599) { return 'medium' }
    else if(space >= 600) { return 'far' }
}

function setResult(msg, isValid) {
    const result = document.querySelector('#result')
    const p = document.createElement('p')

    result.innerHTML = ''

    if(isValid)
        p.classList.add('sucesseful')
    else
        p.classList.add('fail')
    
    p.innerHTML = msg

    result.appendChild(p)
    console.log(msg)
}