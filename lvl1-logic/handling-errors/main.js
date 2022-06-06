// Part 1

try {
    console.log(uninitialized);
} catch (err) {
    console.log('uninitialized do not exist.')
}

console.log('###');
//Part 2

function sum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x and y need to be a number.');
    }
    return x + y;
}

try {
    console.log(sum(20, 10));
    console.log(sum('20', 10));
} catch (error) {
    //console.log(error); <- Unfriendly to the user;
    console.log('A more friendly error to the user.');
}

console.log('###');
//Part 3

try {
    // Executed when there's no errors;
    console.log('Opened the app.');
    console.log(uninitialized);

} catch (e) {
    // Executed when there's errors;
    console.log('Handling the  error');
} finally {
    // Always; 
    // Can be ommited;
    console.log('App closed.'); 
}

console.log('###');
//Part 4

function returnHour(date) {
    if(!(date instanceof Date)){
        throw new TypeError('Invalid type');
    }

    if(!date) {
        date = new Date();
    }

    const hour = date.getHours();
    return hour;
}

const date = new Date();
try{
    console.log(`Hour: ${returnHour(date)}`);
    console.log(`Hour: ${returnHour(20)}`);
} catch(e) {
    console.log('Invalid instance');
}