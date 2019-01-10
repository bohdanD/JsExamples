

// function initialization
function getGreetings(firstName, lastName) {
    return 'Hello' + firstName + ' ' + lastName;
}
//function call
var greeting1 = getGreetings('Vasya', 'Pryhara');

function displayGreeting(firstName, lastName, displayCallback) {
    var greeting = 'Hello' + firstName + ' ' + lastName;
    displayCallback(greeting);
}

function displayInConsole(greeting){
    console.log(greeting);
}

function displayInAlert(greeting){
    alert(greeting);
}

displayGreeting('Vasya', 'Pryhara', displayInConsole);
displayGreeting('Vasya', 'Pryhara', displayInAlert);

function gearBox(rotations, gear) {
    return rotations * gear;
}

var outputRotations = gearBox(2000, 1);
console.log(outputRotations);
