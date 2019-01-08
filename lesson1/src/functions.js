
var bodyo = 'bodyo';

function functionName (parameter1, parameter2) {
    // body
    //parameter2(); // error parameter2 isnt function
    var vasya = 'Vasya';
    console.log('parameter1 - ' + parameter1 + '; parameter2 - ' + parameter2);
    console.log(vasya);
    console.log(bodyo);
}

functionName('vasya', 'bodyo');
//console.log(vasya);
console.log(bodyo);


var firstResult = functionName('bla-bla', 'blah-blah');
console.log(firstResult);


function add(first, second){
    return first + second;
}

//console.log(divide(20, 2)); // error

var divide = function (first, second) {
    if(second === 0) {
        return 'infinity';
    }
    return first / second;
}


console.log(divide(20, 0));


var result1 = add(2, 2);
console.log('2+2 = ' + result1);

var result2 = add(4, 4);
console.log('4+4 = ' + result2);