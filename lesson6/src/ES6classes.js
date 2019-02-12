
// ES6 === ES2015 EcmaScript

class Person {
    constructor(name){
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

var p = new Person("Vasya");
console.log(p);
console.log(p.getName());

class Student extends Person {
    constructor(name, university) {
        super(name);
        this.university = university;
    }

    getUniversity() {
        return this.university;
    }
}

var s = new Student('name', 'lnu');
console.log(s.getUniversity());
console.log(s.getName());