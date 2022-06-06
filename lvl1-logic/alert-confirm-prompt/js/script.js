var parentElement = document.body

const logic = () => {
    answer = confirm('Do you really wanna create a new button element?');
    if(answer == true){

        var newPositiveElement = document.createElement('h1')
        var text = prompt('Qual seu nome?')
        var newText = document.createTextNode(text)

        newPositiveElement.appendChild(newText)
        parentElement.appendChild(newPositiveElement)
    }
    else{
        alert('Ok, no buttons today');
    }
}