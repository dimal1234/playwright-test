

const BasePage = require('./BasePage');

class CartPage extends BasePage {
  constructor(page) {
    super(page);

    this.viewCart = 'text=View Cart';
    this.checkoutBtn = 'text=Proceed To Checkout';
    this.deleteItem = '.cart_quantity_delete';
  }

  async openCart() {
    await this.click(this.viewCart);
  }

  async proceedToCheckout() {
    await this.click(this.checkoutBtn);
  }

  async removeItem() {
    await this.click(this.deleteItem);
  }
}

module.exports = CartPage;