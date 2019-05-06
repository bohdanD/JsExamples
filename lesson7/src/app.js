
var acc1 = new BankAccount('1', 100);
var acc2 = new BankAccount('2', 250);

console.log([acc1, acc2]);

var payment1 = new Payment(acc1, acc2, 50);
payment1.proceedTransaction();

console.log([acc1, acc2]);

var payment2 = new Payment(acc1, acc2, 51);
payment2.proceedTransaction();

// var payment3 = new Payment(acc1, acc2, 1);
// var TrResult = payment3.proceedTransaction();

// if (TrResult) {
//   var payment4 = new Payment(acc2, acc1, 1);
//   payment4.proceedTransaction();
// }

var payment3 = new Payment(acc1, acc2, 1);
var payment4 = new Payment(acc2, acc1, 1);

payment3.proceedTransaction() && payment4.proceedTransaction()

