const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../po/pages/login.page');
const InventoryPage = require('../po/pages/inventory.page');
const usernames = require('../testdata/users');

Given('I am on the login page', async () => {
    await LoginPage.open();
});

When('I type {string} into the username field', async (username) => {
    await LoginPage.username.setValue(username);
});

When('I type {string} into the password field', async (password) => {
    await LoginPage.password.setValue(password);
});

When('I clear the username field', async () => {
    await LoginPage.clear(LoginPage.username);
});

When('I clear the password field', async () => {
    await LoginPage.clear(LoginPage.password);
});

When ('I click the login button', async () => {
    await LoginPage.loginBtn.click();
});

Then('I should see a error message saying {string}', async (expectedMessage) => {
    await expect(LoginPage.errorMessage).toHaveText(expectedMessage);
});

Then('I should see the correct outcome for {string}', async (user) => {
    const userData = usernames.find(u => u.username === user);
    if(userData.expected === 'inventory') {
        await InventoryPage.isOpened();
    } else {
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    }
});

