
const BasePage = require('./BasePage');

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);

    this.placeOrder = 'text=Place Order';
    this.nameOnCard = '[name="name_on_card"]';
    this.cardNumber = '[name="card_number"]';
    this.cvc = '[name="cvc"]';
    this.expMonth = '[name="expiry_month"]';
    this.expYear = '[name="expiry_year"]';
    this.payBtn = '[data-qa="pay-button"]';
  }

  async placeOrderFlow(card) {
    await this.click(this.placeOrder);

    await this.fill(this.nameOnCard, card.name);
    await this.fill(this.cardNumber, card.number);
    await this.fill(this.cvc, card.cvc);
    await this.fill(this.expMonth, card.month);
    await this.fill(this.expYear, card.year);

    await this.click(this.payBtn);
  }
}

module.exports = CheckoutPage;