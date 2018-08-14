const expenses = require('./expenses/expenses.service.js');
const incomes = require('./incomes/incomes.service.js');
const users = require('./users/users.service.js');
module.exports = function (app) {
  app.configure(expenses);
  app.configure(incomes);
  app.configure(users);
};
