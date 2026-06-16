const { test, expect } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const SignupPage = require('../pages/SignupPage');

const { generateUser } = require('../utils/users');

test.describe('User Registration', () => {

  test('Register New User Successfully', async ({ page }) => {

    const homePage = new HomePage(page);
    const signupPage = new SignupPage(page);

    const user = generateUser();

    await homePage.goto('/');

    await homePage.goToLogin();

    await signupPage.startSignup(
      user.name,
      user.email
    );

    await signupPage.completeRegistration(user);

    await expect(
      page.locator(signupPage.accountCreatedText)
    ).toBeVisible();

  });

});