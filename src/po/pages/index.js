const InventoryPage = require("./inventory.page");
const LoginPage = require("./login.page");

/**
 *
 * @param name {'inventory' | 'login'}
 * @returns  {DashboardPage | DoctorsPage}
 * Page Factoring
 */
function pages(name) {
  const page = {
    inventory: new InventoryPage(),
    login: new LoginPage(),
  };
  return page[name.toLowerCase()];
}

module.exports = {
  InventoryPage,
  LoginPage,
  pages,
};
