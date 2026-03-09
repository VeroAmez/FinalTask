const BasePage = require('./base.page');

class LoginPage extends BasePage {
  async open() {
    await super.open('/');
  }

  get loginBtn() {
    return $('[data-test="login-button"]');
  }

  get username() {
    return $('[data-test="username"]');
  }

  get password() {
    return $('[data-test="password"]');
  }

  get errorMessage() { 
    return $('[data-test="error"]');
  }


  async clear(element) {
    await element.click();
    await browser.keys(['Control', 'a']);
    await browser.keys('Delete');
  }

  async setUsername(username) {
    await this.username.setValue(username);
  }

  async setPassword(password) {
    await this.password.setValue(password);
  }

  async clearUsername() {
    await this.clear(this.username);
  }

  async clearPassword() {
    await this.clear(this.password);
  }

  async clickLogin() {
    await this.loginBtn.click();
  }

  async validateErrorMessage(expectedMessage) {
    await expect(this.errorMessage).toHaveText(expectedMessage);
  }

}

module.exports = new LoginPage();