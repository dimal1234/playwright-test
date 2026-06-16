

const BasePage = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);

    this.signupLoginBtn = 'text=Signup / Login';
    this.productsBtn = 'text=Products';
    this.cartBtn = 'text=Cart';
  }

  async goToLogin() {
    await this.click(this.signupLoginBtn);
  }

  async goToProducts() {
    await this.click(this.productsBtn);
  }

  async goToCart() {
    await this.click(this.cartBtn);
  }
}

module.exports = HomePage;