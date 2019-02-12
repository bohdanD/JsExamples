
function Person(name) {
    Person.prototype.name = name;
    // this.name = name;

    Person.prototype.getName = function() {
        return this.name;
    }
}

var p = new Person('dfdf');
console.log(p.getName());

function Student(name, university) {
    Student.prototype.name = name;
    Student.prototype.university = university;

    Student.prototype.getUniversity = function() {
        return this.university;
    }
}

Student.prototype.__proto__ = Person.prototype;

var s = new Student('name', 'lnu');
console.log(s.getUniversity());
console.log(s.getName());

console.log({});
console.log(new Object());
console.log(p.toString());
