const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage");
const { generateUserData } = require("../utils/testData");


test.describe("register", () => {
  test("New User", async ({ page }) => {
    await page.setViewportSize({ width: 1026, height: 763 });

    const loginPage = new LoginPage(page);
    const userData = generateUserData();

    await loginPage.register(userData);

    await expect(page).toHaveURL('/');
  });
});