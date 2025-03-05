const { SignUp } = require("../components/index");
const BasePage = require("./base.page");

class LoginPage extends BasePage {
  constructor() {
    super("/");
    this.signUp = new SignUp();
  }
}

module.exports = LoginPage;
