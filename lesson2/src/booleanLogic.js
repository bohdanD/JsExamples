
// logical AND
// var first = "first";
// var second = "second";

// var result = first && second;
// console.log(result);

// var first1 = "";
// var second1 = "second";

// var result1 = first1 && second1;
// console.log(result1);

// var first2 = "first";
// var second2 = "";

// var result2 = first2 && second2;
// console.log(result2);

//logical OR
var first = "first";
var second = "second";

var result = first || second;
console.log(result);

var first1 = "";
var second1 = "second";

var result1 = first1 || second1;
console.log(result1);

var first2 = "first";
var second2 = "";

var result2 = first2 || second2;
console.log(result2);

var first2 = "";
var second2 = 0;

var result2 = first2 || second2;
console.log(result2);

// priority: you can use parenthese - () to set priority of execution
var first2 = "first";
var second2 = "";
var third = 0;

var result = first2 && (second2 || third);
console.log(result);
