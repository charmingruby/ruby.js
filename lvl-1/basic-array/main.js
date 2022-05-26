const foods = ['Lasagna', 'Pizza', 'Apple']

console.log('Default array: ' + foods)

foods.push('Pear', 'Popcorn')
console.log('Array with added elements at the end(push): ' + foods)

foods.unshift('Steak')
console.log('Array with added elements at the beginning(unshift): ' + foods)

const pop = foods.pop()
console.log('Last array item removed(pop): ' + foods +', removed item:' + pop)


const shift = foods.shift()
console.log('First array item removed(shift): ' + foods +', removed item:' + shift)

const slice = foods.slice(0,2)
console.log('A slice of the array: ' + slice)
