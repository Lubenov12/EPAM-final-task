Feature: Login
  Scenario: Login page try to Login without credentials
  When I open 'Login' page
  And I set "username" value to ""
  And I set "password" value to ""
  And I click "loginButton" button
  Then I receive an error message "Epic sadface: Username is required"

Scenario: Login page try to Login with only username credentials
  When I open 'Login' page
  And I set "username" value to "standard_user"
  And I set "password" value to ""
  And I click "loginButton" button
  Then I receive an error message "Epic sadface: Password is required"

Scenario: Login page logging in with the correct credentials
  When I open 'Login' page
  And I set "username" value to "standard_user"
  And I set "password" value to "secret_sauce"
  And I click "loginButton" button
  Then I validate title is "Swag Labs" and url is "/inventory.html"

