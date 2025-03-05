class BasePage {
  constructor(urlPage) {
    this.urlPage = urlPage;
  }

  async open() {
    await browser.url(this.urlPage);
  }
}

module.exports = BasePage;
