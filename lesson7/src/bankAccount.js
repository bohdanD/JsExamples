
class BankAccount {
  constructor (accountNumber, amount){
    this.accountNumber = accountNumber;
    this._amount = amount;
  }

  getAmount() {
    return this._amount;
  }

  proceedPayment(amount) {
    if (amount < 0) {
      if (this._amount + amount >= 0) {
        this._amount = this._amount + amount;
        return true;
      } else {
        return false;
      }
    }

    this._amount = this._amount + amount;
    return true;
  }


}