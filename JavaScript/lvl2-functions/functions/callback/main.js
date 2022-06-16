function f1(callback) {
    console.log('f1');
    if(callback) callback();
}

function f2(callback) {
    console.log('f2');
    if(callback) callback();
}

function f3(callback) {
    console.log('f3');
    if(callback) callback();
}

// Christmas tree identation
f1(function() {
    f2(function() {
        f3();
    });
});

console.log('#####');
// Better identation
f1(f1Callback);

function f1Callback() {
    f2(f2Callback)
}

function f2Callback() {
    f3();
}