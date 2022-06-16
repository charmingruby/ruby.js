(function(weight, height, age) {

    function createName(name){
        const lastName = 'Hyde';
        return name + ' ' + lastName
    }

    console.log(createName('Ruby'));

    console.log(weight + ', ' + height + ', ' + age);

})(50, 1.60, 19);