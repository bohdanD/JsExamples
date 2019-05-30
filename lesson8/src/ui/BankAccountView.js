class BankAccountView {

    constructor(parentElementId, bankAccountToRender) {
        this.parentElementId = parentElementId;
        this.bankAccount = bankAccountToRender;
    }

    render() {
        const markup = `
            <div>
                <div>
                    <h4>Account number: </h4>
                    <h3>${this.bankAccount.accountNumber}</h3>
                </div>
                <div>
                    <h4>Amount: </h4>
                    <h3>${this.bankAccount.getAmount()}</h3>
                </div>
               
            </div>
        `;

        const parentElement = document.getElementById(this.parentElementId);
        parentElement.innerHTML = markup;
    }
}