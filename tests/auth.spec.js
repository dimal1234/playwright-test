const { test, expect } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');
const data = require('../utils/testData');

test('Login using external test data', async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);

  await home.goto(data.baseURL);

  await home.goToLogin();

  await login.login(
    data.users.validUser.email,
    data.users.validUser.password
  );

  await expect(page.locator('text=Logged in as')).toBeVisible();
});