
var isTrue = true;

if (isTrue) {
    console.log('isTrue = ' + isTrue);
    isTrue = false
} else {
    console.log('isTrue = ' + isTrue);
}

if (isTrue) {
    console.log('isTrue = ' + isTrue);
    isTrue = false
} else {
    console.log('isTrue = ' + isTrue);
}

// if (condition) {
    
// }
// if (condition) {
    
// }

var number = 5;

if (number < 5) {
    console.log('number < 5');
} else if (number > 5) {
    console.log('number > 5');
} else {
    console.log('number equals 5');
}

var result;
number = 0;

// if (number === 0) {
//     result = "number is zero";
// } else {
//     result = "number is not zero";
// }

//ternary operator
result = number === 0 ? "number is zero" : "number is not zero";

console.log(result);

var expr = 'Oranges2';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}
