// Return the nums > 10
const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const filteredNums = nums.filter(value => value > 10 ? true : false);
console.log(filteredNums);

// Return the people who have the name wiht more than 5 letters
// Return the people with more than 50 years
// Return the people who name finishes with an a
const people = [
    { name: 'Pedro', age: 18 },
    { name: 'Bruna', age: 27 },
    { name: 'Larissa', age: 51 },
    { name: 'Gustavo', age: 21 },
    { name: 'Márcia', age: 60 },
    { name: 'Flávia', age: 21 },
];

const bigNamePeople = people.filter((obj) => (obj.name).length > 5 ? true : false);
console.log(bigNamePeople);

const oldPeople = people.filter(obj => obj.age > 50 ? true : false);
console.log(oldPeople);

const aFinishedNamePeople = people.filter(obj => obj.name.toLowerCase().endsWith('a'));
console.log(aFinishedNamePeople);