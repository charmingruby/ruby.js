function* generator1() {
    // Any code
    yield 'Value 1';

    // Any code
    yield 'Value 2';

    // Any code
    yield 'Value 3';
}

const g1 = generator1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

// Unlimited yields
function* generator2() {
    let i = 0;

    while(true) {
        yield i;
        i++; 
    }
}

// A generator working for another
function* generator3() {
    yield 1;
    yield 2;
    yield 3;
}

function* generator4() {
    yield* generator3();
    yield 4;
    return 5;
    
    // Return finishes the function
    yield 6;
}

const g4 = generator4();

for(let value of g4) {
    console.log(value);
}