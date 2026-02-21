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

}

module.exports = new LoginPage();