const { Then } = require("@wdio/cucumber-framework");
const { pages } = require("../po");
const logger = require("../config/winston.createLogger.cjs");
Then("I receive an error message {string}", async function (error) {
  const errorMessage = await pages("login").signUp.errorMessage.getText();
  logger.info(
    `Running test: Expect error message to be ${error} got ${errorMessage}`
  );
  return expect(errorMessage).toEqual(error);
});

Then(
  "I validate title is {string} and url is {string}",
  async function (title, url) {
    const currentTitle = await browser.getTitle();
    const inventoryUrl = pages("inventory").urlPage;
    logger.info(
      `Running test: Expect title to be ${title}, got ${currentTitle}`
    );
    expect(currentTitle).toEqual(title);
    logger.info(`Running test: Expect url to be ${url}, got ${inventoryUrl}`);
    expect(inventoryUrl).toEqual(url);
  }
);
