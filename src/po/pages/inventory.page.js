const BasePage = require('./base.page');

class InventoryPage extends BasePage {
  async isOpened() {
    const currentUrl = await browser.getUrl();
    await expect(currentUrl).toContain('/inventory');
    await this.validateTitle();
  }

  async validateTitle() {
    const title = await browser.getTitle();
    await expect(title).toBe('Swag Labs');
  }

  
}

module.exports = new InventoryPage();