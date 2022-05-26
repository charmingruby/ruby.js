const Info = {
    id: '130.463',
    age: 19,
    country:'Brazil',

    defaultApresentation(){
        console.log('Identity: ' + this.id + ' (' + this.age + ') is saying hellooo!')
    },

    updateAge () {
        this.age++
    }
}

Info.defaultApresentation()
Info.updateAge()
Info.defaultApresentation()

function createId (name, lastName, age) {
    return({
        name: name,
        lastName: lastName,
        age: age,
    })
} 

const Ruby = createId ('Ruby', 'Hyde', 19)
console.log(Ruby)