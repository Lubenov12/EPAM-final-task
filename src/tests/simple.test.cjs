const { pages } = require("../po");
const errorMessage = "Epic sadface: ";
describe("Test logging in to an account", () => {
  beforeEach(async () => {
    await pages("login").open();
  });
  it("With empty username and password fields", async () => {
    await pages("login").signUp.username.setValue("");
    await pages("login").signUp.username.setValue("");
    await pages("login").signUp.password.setValue("");
    await pages("login").signUp.loginButton.click();
    await expect(pages("login").signUp.errorMessage).toBeDisplayed();
    await expect(pages("login").signUp.errorMessage).toHaveText(
      errorMessage + "Username is required"
    );
  });
  it("with only empty password field", async () => {
    await pages("login").signUp.username.setValue("username1");
    await pages("login").signUp.password.setValue("");
    await pages("login").signUp.loginButton.click();
    await expect(pages("login").signUp.errorMessage).toBeDisplayed();
    await expect(pages("login").signUp.errorMessage).toHaveText(
      errorMessage + "Password is required"
    );
  });
  it("successful login with correct credentials", async () => {
    await pages("login").signUp.username.setValue("standard_user");
    await pages("login").signUp.password.setValue("secret_sauce");
    await pages("login").signUp.loginButton.click();
    await expect(browser).toHaveTitle("Swag Labs");
    await expect(browser).toHaveUrl(
      browser.options.baseUrl + pages("inventory").urlPage
    );
  });
});
