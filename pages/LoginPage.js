

const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.email = '[data-qa="login-email"]';
    this.password = '[data-qa="login-password"]';
    this.loginBtn = '[data-qa="login-button"]';
    this.logoutBtn = 'text=Logout';
  }

  async login(email, password) {
    await this.fill(this.email, email);
    await this.fill(this.password, password);
    await this.click(this.loginBtn);
  }

  async logout() {
    await this.click(this.logoutBtn);
  }
}

module.exports = LoginPage;