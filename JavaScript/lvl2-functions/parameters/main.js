// Default values
function sum(a, b = 0, c = 2) {
    console.log(a + b + c);
}
sum(2);
sum(2,4);
sum(2, undefined ,6);

// Destructuring
function destruct1({ name, lastName, age }) {
    console.log(name, lastName, age);
}
destruct1({ name:'Ruby', lastName:'Hyde', age:18 });

function destruct2([value1, value2, value3]) {
    console.log(value1, value2, value3);
}
destruct2(['Ruby', 'Javascript', 21]);

// Count
function count(operation, acumulator, ...numbers) {
    for(let number of numbers) {
        if(operation === '+') { acumulator += number }; 
        if(operation === '-') { acumulator -= number };
        if(operation === '/') { acumulator /= number };
        if(operation === '*') { acumulator *= number };
    }
    console.log(acumulator);
}
count('+', 0, 4, 5, 7);
count('-', 100, 4, 10, 48);
count('/', 24, 1, 2, 4);
count('*', 1, 4, 7, 9);

// Argument
const data = (...args) => {
    console.log(args);
};
data('+', 1, 2, 3, 4);