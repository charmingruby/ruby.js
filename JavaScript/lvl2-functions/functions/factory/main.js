function createPerson(name, lastName, height, weight) {
    return({
        name,
        lastName,
        talk(subject) {
            return(`${name} ${lastName} is talking about ${subject}.`);
        },
        height,
        weight,
        // Getter, transformed the method into an attribute
        get bmi() {
            const index = this.weight / (this.height ** 2);
            return index.toFixed(2);
        },

        // Getter
        get completeName() {
            return(`${this.name} ${this.lastName}`);  
        },
        // Setter
        set completeName(value) {
            value = value.split(' ');
            this.name = value.shift();
            this.lastName = value.join(' ');
        }
    });
}

const p1 = createPerson('Ruby', 'Hyde', 1.60, 50);

// Before using get:
// console.log(p1.bmi());

// After using get:
console.log(p1.bmi);

// Get and Set
p1.completeName = 'Dory Manchester';
console.log(p1.completeName);