//Anonymous functions

function greeting(name, functionToExecute) {
    functionToExecute(name);
}

greeting('name', function(name){
    console.log(name);
});

greeting('name', function(name){
    //alert(name);
});

// Immediate function call 

(function (name) {
    console.log('Immediate function call - ' + name);
})('Vasya');

// Execution context
var n = 3;

function foo(a, b){
    var c = a * b * n;
    return c % 2;
}

//execution context #1
foo(1, 2);  // execution context { a: 1, b : 2, n: 3, c: undefined ... :6}

//execution context #2
n = 1;
foo(3, 4); // // execution context { a: 3, b : 4, n: 1, c: undefined ...}

//  Call stack
function multiply(a, b) {
    return a * b;
}

function square(a) {
    var c = multiply(a, a);

    console.log(c);
}

square(5);

// Recursion

function pow(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * pow(base, exponent - 1);
}

console.log(pow(2, 10));