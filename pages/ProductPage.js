

const BasePage = require('./BasePage');

class ProductPage extends BasePage {
  constructor(page) {
    super(page);

    this.firstProduct = '.product-image-wrapper:first-child';
    this.addToCart = 'text=Add to cart';
  }

  async addFirstProductToCart() {
    await this.page.hover(this.firstProduct);
    await this.click(this.addToCart);
  }
}

module.exports = ProductPage;