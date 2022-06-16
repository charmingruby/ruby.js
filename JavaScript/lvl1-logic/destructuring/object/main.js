const person = {
    name: 'Ruby',
    lastName: 'Hyde',
    job: {
        tec: 'JS',
        xp: 2,
        lvl: 'Junior'
    }
};

console.log(person);

//Different types of assignment
const { name: n, lastName: lN, job: { tec: t, xp: x, lvl: l } } = person;

const { n2, lN2 } = person;

console.log(`
    Name: ${n} ${lN} \n
    ${l} Developer for ${x} years with ${t}.
`);