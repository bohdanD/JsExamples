

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.logName = function () {
        console.log(`First Name - ${this.firstName}, Last Name - ${this.lastName}.`);
        
    }

    // function logName() {
    //     console.log(`First Name - ${this.firstName}, Last Name - ${this.lastName}.`);
    // }
    // logName.apply({firstName: 'dfd', lastName: 'dfdfd'});
}

var person = new Person('Vasya', 'Pryhara');

function logName() {
    console.log(`First Name - ${this.firstName}, Last Name - ${this.lastName}.`);
}
logName.apply(person);

person.logName();

console.log(person.firstName);
