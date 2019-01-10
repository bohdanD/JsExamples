var emptyArray = [];

var array = ['my name', 'sdsd'];
array[0]; //'my name'
array[1]; // 'sdsd'

// adding element to existing array
array.push('not my name');
array[2]; // 'not my name'
array.length; // 3
console.log(array.length);
console.log(array);

//deleting last element from array
var lastElement = array.pop();
console.log(lastElement);
console.log(array.length); //2
console.log(array);

var persons = [{name: 'Vasya', age: 21}, {name: 'Bodyo', age: 22}];
// get array of names only ??
//solution #1
var names = [];
for(var index = 0; index < persons.length; index++){
    names.push(persons[index].name);
}
console.log(names);
