const fruits = ['Pear', 'Apple', 'Watermelon', 'Melon', 'Strawberry'];

const person = {
    name: 'Larissa',
    lastName: 'Dias',
    age: 23
};


for (let i in fruits) {
    console.log(fruits[i]);
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
};