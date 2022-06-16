const numbers  = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [firstNumber, secondNumber, ...rest] = numbers;
const [ , , , , fourthNumber, fifthNumber] = numbers;

console.log(`${firstNumber}, ${secondNumber}, and the rest: ${rest}`);
console.log(`${fourthNumber} and ${fifthNumber}`);

const numbersLists = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [listOne, listTwo, listThree] = numbersLists;

const [ [ , two, ], [four, , ], [...lastNums] ] = numbersLists;

console.log(`List 1: ${listOne}, List 2: ${listTwo} and ${listThree}`);
console.log(`${two}, ${four}, ${lastNums}`);