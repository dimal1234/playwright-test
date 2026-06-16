const { test, expect } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');

test('Add Product to Cart', async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  await home.goto('https://automationexercise.com');

  await home.goToProducts();
  await product.addFirstProductToCart();

  await cart.openCart();

  await expect(page.locator('.cart_description')).toBeVisible();
});