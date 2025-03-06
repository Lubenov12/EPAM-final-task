const BaseComponent = require("../common/base.component");
class SignUp extends BaseComponent {
  constructor() {
    super(".login_wrapper");
  }
  get username() {
    return this.rootEl.$("#user-name");
  }
  get password() {
    return this.rootEl.$("#password");
  }
  get loginButton() {
    return this.rootEl.$("#login-button");
  }
  get errorMessage() {
    return this.rootEl.$(".error-message-container.error");
  }
}

module.exports = SignUp;
