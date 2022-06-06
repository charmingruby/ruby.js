const elements = [
    {tag: 'p', text: 'Sentence 1'},
    {tag: 'div', text: 'Sentence 2'},
    {tag: 'footer', text: 'Sentence 3'},
    {tag: 'section', text: 'Sentence 4'}
];

const section = document.querySelector('.container');
const div = document.createElement('div');

for(let c = 0; c < elements.length ;c++) {
    
    let { tag, text } = elements[c];
    let newTag = document.createElement(tag);
    
    newTag.innerHTML = text;
    
    div.appendChild(newTag);
}

section.appendChild(div);