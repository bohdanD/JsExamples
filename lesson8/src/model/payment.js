
class Payment {

  constructor(senderAccount, recieverAccount, amount){
    this.senderAccount = senderAccount;
    this.recieverAccount = recieverAccount;
    this.amount = amount;
  }

  proceedTransaction() {
    // if (this.senderAccount.proceedPayment(-this.amount)) {
    //   this.recieverAccount.proceedPayment(this.amount);
    //   return true;
    // }
    // return false;
    return this.senderAccount.proceedPayment(-this.amount) && this.recieverAccount.proceedPayment(this.amount);
  }
}