const { When } = require("@wdio/cucumber-framework");
const { pages } = require("../po");

When("I open {string} page", function (pageName) {
  return pages(pageName).open();
});

When("I set {string} value to {string}", function (inputField, value) {
  return pages("login").signUp[inputField].setValue(value);
});

When("I click {string} button", function (button) {
  return pages("login").signUp[button].click();
});
