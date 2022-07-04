function Person(name, lastName) {
    //Private
    const id = '123.456'
    const privateMethod = () => {
        console.log('Private Method');
    }

    //Public
    this.name = name;
    this.lastName = lastName;

    this.sayID = () => {
        console.log('ID: ' + id);
    }
}

const p1 = new Person('Tyler', 'Joseph');
console.log(p1.name);
p1.sayID();