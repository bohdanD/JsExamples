

class PaymentView {

    constructor(parentElementId, paymentToRender) {
        this.parentElementId = parentElementId;
        this.payment = paymentToRender;
    }

    render() {
        const markup = `
            <div>
                <div>
                    <h4>Sender Account Number: </h4>
                    <h3>${this.payment.senderAccount}</h3>
                </div>
                <div>
                    <h4>Reciever Account Number: </h4>
                    <h3>${this.payment.recieverAccount}</h3>
                </div>
                <div>
                    <h4>Amount: </h4>
                    <h3>${this.payment.amount}</h3>
                </div>
            </div>
        `;

        const parentElement = document.getElementById(this.parentElementId);
        parentElement.innerHTML = markup;
    }
}