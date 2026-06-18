const { expect } = require("@playwright/test");

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Navigation
    this.signupLoginLink = page.locator("#header li:nth-of-type(4) > a");

    // Login/Signup page - signup section
    this.signupNameInput = page.locator("[data-qa='signup-name']");
    this.signupEmailInput = page.locator("[data-qa='signup-email']");
    this.signupButton = page.locator("[data-qa='signup-button']");

    // Account information page
    this.genderMaleRadio = page.locator("#id_gender1");
    this.passwordInput = page.locator("[data-qa='password']");
    this.daysSelect = page.locator("[data-qa='days']");
    this.monthsSelect = page.locator("[data-qa='months']");
    this.yearsSelect = page.locator("[data-qa='years']");
    this.newsletterCheckbox = page.locator("#optin");
    this.firstNameInput = page.locator("[data-qa='first_name']");
    this.lastNameInput = page.locator("[data-qa='last_name']");
    this.companyInput = page.locator("[data-qa='company']");
    this.addressInput = page.locator("[data-qa='address']");
    this.countryInput = page.locator("[data-qa='country']");
    this.stateInput = page.locator("[data-qa='state']");
    this.cityInput = page.locator("[data-qa='city']");
    this.zipcodeInput = page.locator("[data-qa='zipcode']");
    this.mobileNumberInput = page.locator("[data-qa='mobile_number']");
    this.createAccountButton = page.locator("[data-qa='create-account']");

    // Account created page
    this.accountCreatedMessage = page.getByText(
      "Congratulations! Your new account has been successfully created!"
    );
    this.continueLink = page.locator("[data-qa='continue-button']");
  }

  async goto() {
    await this.page.goto("https://automationexercise.com/");
  }

  async openSignupLoginPage() {
    await this.signupLoginLink.click();
    await expect(this.page).toHaveURL("https://automationexercise.com/login");
  }

  /**
   * Fills the initial "New User Signup!" form and submits it.
   * @param {string} name
   * @param {string} email
   */
  async fillSignupForm(name, email) {
    await this.signupNameInput.click();
    await this.signupNameInput.fill(name);

    await this.signupEmailInput.click();
    await this.signupEmailInput.fill(email);

    await this.signupButton.click();
    await expect(this.page).toHaveURL("https://automationexercise.com/signup");
  }

  /**
   * Fills the full "Enter Account Information" form.
   * @param {object} userData - see data/testData.js for shape
   */
  async fillAccountInformation(userData) {
    if (userData.gender === "male") {
      await this.genderMaleRadio.click();
    }

    await this.passwordInput.click();
    await this.passwordInput.fill(userData.password);

    await this.daysSelect.selectOption(userData.dob.day);
    await this.monthsSelect.selectOption(userData.dob.month);
    await this.yearsSelect.selectOption(userData.dob.year);

    if (userData.newsletter) {
      await this.newsletterCheckbox.click();
    }

    await this.firstNameInput.click();
    await this.firstNameInput.fill(userData.firstName);

    await this.lastNameInput.fill(userData.lastName);

    await this.companyInput.click();
    await this.companyInput.fill(userData.company);

    await this.addressInput.click();
    await this.addressInput.fill(userData.address);

    await this.countryInput.selectOption({ label: userData.country });

    await this.stateInput.click();
    await this.stateInput.fill(userData.state);

    await this.cityInput.click();
    await this.cityInput.fill(userData.city);

    await this.zipcodeInput.click();
    await this.zipcodeInput.fill(userData.zipcode);

    await this.mobileNumberInput.click();
    await this.mobileNumberInput.fill(userData.mobileNumber);
  }

  async submitAccountCreation() {
    await this.createAccountButton.click();
    await expect(this.page).toHaveURL(
      "https://automationexercise.com/account_created"
    );
  }

  /**
   * Verifies the visible "Account Created!" confirmation message on the page.
   */
  async verifyAccountCreated() {
    await expect(this.accountCreatedMessage).toBeVisible();
  }

  async clickContinueAfterAccountCreated() {
    await this.continueLink.click();
  }

  /**
   * Full end-to-end registration flow using a single userData object.
   * @param {object} userData
   */
  async register(userData) {
    await this.goto();
    await this.openSignupLoginPage();
    await this.fillSignupForm(userData.name, userData.email);
    await this.fillAccountInformation(userData);
    await this.submitAccountCreation();
    await this.verifyAccountCreated();
    await this.clickContinueAfterAccountCreated();
  }
}

module.exports = { LoginPage };