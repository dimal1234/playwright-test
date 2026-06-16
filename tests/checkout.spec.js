const { test, expect } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

const data = require('../utils/testData');

test('Checkout Flow using Utils Data', async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await home.goto(data.baseURL);

  await home.goToLogin();
  await login.login(
    data.users.validUser.email,
    data.users.validUser.password
  );

  await home.goToProducts();
  await product.addFirstProductToCart();

  await cart.openCart();
  await cart.proceedToCheckout();

  await checkout.placeOrderFlow(data.cards.validCard);

  await expect(page.locator('text=Order Placed!')).toBeVisible();
});