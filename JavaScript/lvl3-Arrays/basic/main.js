const names = ['Ezreal', 'Gnar', 'Karma'];

// Reference
const names2 = names;

// Copy
const names3 = [...names];

names2.pop();

console.log('Array Names:' + names);
console.log('Array Names2:' + names2);
console.log('Array Names3:' + names3);

// Length
console.log(names.length);

// Methods
//                0       1      2       3          4 
const list = ['Pillow', 'Bed', 'TV', 'Computer', 'Book',];

    // Remove methods
    const finalRemoved = list.pop();
    const startRemoved = list.shift();

    // Add methods
    list.push('Door'); // At the end
    list.unshift('Floor'); // At the start

    // Slicing methods
    const electronics = list.slice(2,4);
    const lastTwoItemsNegative = list.slice(-1,-3);

    // String and array
    const dogName = 'Alvin Morgan Stark';

        // String to array separated by space
        const dogNameArray = dogName.split(' ');

        // Array to string separated by space
        const dogNameString = dogNameArray.join(' ');

