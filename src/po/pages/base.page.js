class BasePage {
  async open(url) {
    await browser.url(url);
  }
} 

module.exports = BasePage;