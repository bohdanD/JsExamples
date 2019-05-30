
const payment = new Payment(123456, 654321, 100.99);

const paymentView = new PaymentView('payment1', payment);

paymentView.render();

const bankAccount = new BankAccount(64354654, 200);
const bankAccountView = new BankAccountView('bankAccount1', bankAccount);
bankAccountView.render();