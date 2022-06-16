// This declaration have hoisting, the func go to the top of the code.
sayHey();
function sayHey() {
    console.log('Hey');
}

console.log('#####');
// First-class objects;
// Can be treated as a data.
const data = function() {
    console.log("I'm a data");
};
data();

function execFunc(func) {
    func();
}

execFunc(data);

console.log('#####');
// Arrow Function.
const arrow = () => {
    console.log("I'm an arrow function.");
};
arrow();

console.log('#####');
// Function inside an Object.
const obj = {
    talk: () => {
        console.log('Hey...');
    }
}

obj.talk();