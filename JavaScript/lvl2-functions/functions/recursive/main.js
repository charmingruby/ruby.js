function recursive(max) {
    if(max >= 10) return;
    console.log(max);
    recursive(max + 1);
}

recursive(0);