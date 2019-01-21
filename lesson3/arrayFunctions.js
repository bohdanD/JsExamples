// filter

var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];

var numberArray = arr.filter(function(obj, index, array){
    return obj.id !== undefined && typeof(obj.id) === 'number' && !isNaN(obj.id);;
});
console.log(numberArray);
// map
var multipliedArray = numberArray.map(function(number){
    return number.id * 2;
});

console.log(multipliedArray);

// some 
var array = [1, 2, 3, 5];
var isHaveEvenElement = array.some(function(number){
    return number % 2 === 0;
});
console.log(isHaveEvenElement);

var isAllElementEven = array.every(function(number){
    return number % 2 === 0;
});

console.log(isAllElementEven);

// find 
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);