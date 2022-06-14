const date = new Date('2019-04-20 20:20:59')

console.log('Day ' + date.getDate())
console.log('Month ' + date.getMonth() + 1) //Initial value = 0
console.log('Year ' + date.getFullYear())
console.log('Hour ' + date.getHours())
console.log('Minute ' + date.getMinutes())
console.log('Second ' + date.getSeconds())
console.log('Day of the week ' + date.getDay()) //0 - Sunday, 6 - Saturday

console.log(date.toString())

const date2 = new Date()
dateFormat(date2)

function dateFormat(date){
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hour = date.getHours()
    const minute = leftZero(date.getMinutes())
    const second = date. getSeconds()

    const brazilDate = `${day}/${month}/${year} ${hour}:${minute}:${second}`

    console.log(brazilDate)
}

function leftZero(num){
    return (num >= 10 ? num : `0${num}`)
}

function showTime() {
    const date = new Date();

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

showTime();