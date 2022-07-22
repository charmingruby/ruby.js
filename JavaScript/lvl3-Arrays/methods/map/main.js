// Double the numbers
const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const filteredNums = nums.map(value => value * 2);
console.log(filteredNums);

// For each element:
// Return only one string with the name of the person
// Remove only the key "name" of the object
// Add an ID key in each object
const people = [
    { name: 'Pedro', age: 18 },
    { name: 'Bruna', age: 27 },
    { name: 'Larissa', age: 51 },
    { name: 'Gustavo', age: 21 },
    { name: 'Márcia', age: 60 },
    { name: 'Flávia', age: 21 },
];

const names = people.map(obj => obj.name);
console.log(names);

const ages = people.map(obj => ({ idade: obj.age }));
console.log(ages);

const objWithID = people.map((obj, index) => {
    const newObj = {...obj};
    newObj.id = index;
    return newObj;
});
console.log(objWithID);