const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../po/pages/login.page');
const InventoryPage = require('../po/pages/inventory.page');

Given('I am on the login page', async () => {
    await LoginPage.open();
});

When('I type {string} into the username field', async (username) => {
    await LoginPage.setUsername(username);
});

When('I type {string} into the password field', async (password) => {
    await LoginPage.setPassword(password);
});

When('I clear the username field', async () => {
    await LoginPage.clearUsername();
});

When('I clear the password field', async () => {
    await LoginPage.clearPassword();
});

When ('I click the login button', async () => {
    await LoginPage.clickLogin();
});

Then('I should see a error message saying {string}', async (expectedMessage) => {
    await LoginPage.validateErrorMessage(expectedMessage);
});

Then('I should see the inventory page', async () => {
    await InventoryPage.isOpened();
});


