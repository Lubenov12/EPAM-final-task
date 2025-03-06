const { Then } = require("@wdio/cucumber-framework");
const { pages } = require("../po");

Then("I receive an error message {string}", async function (error) {
  const errorMessage = await pages("login").signUp.errorMessage.getText();
  return expect(errorMessage).toEqual(error);
});

Then(
  "I validate title is {string} and url is {string}",
  async function (title, url) {
    const currentTitle = await browser.getTitle();
    const inventoryUrl = pages("inventory").urlPage;
    expect(currentTitle).toEqual(title);
    expect(inventoryUrl).toEqual(url);
  }
);
