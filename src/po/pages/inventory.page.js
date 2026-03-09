const BasePage = require('./base.page');

class InventoryPage extends BasePage {
  async isOpened() {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain('/inventory');

    const title = await browser.getTitle();
    expect(title).toBe('Swag Labs');
  }
  
}

module.exports = new InventoryPage();