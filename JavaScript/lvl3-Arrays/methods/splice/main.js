//               -5      -4     -3      -2         -1 
//                0       1      2       3          4 
const list = ['Pillow', 'Bed', 'TV', 'Computer', 'Book'];

// list.splice(index, delete, add), returns an array

// pop()
const removeds = list.splice(4, 1);
console.log(removeds);
console.log(list);

// push()
const adds = list.splice(4,0,'Wardrobe');
console.log(list);

// Substitute
list.splice(0,2,'Jacket', 'Toy');
console.log(list);