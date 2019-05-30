
const payment = new Payment(123456, 654321, 100.99);

const paymentView = new PaymentView('payment1', payment);

paymentView.render();