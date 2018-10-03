const expenses = require('./expenses/expenses.service.js');
const incomes = require('./incomes/incomes.service.js');
const users = require('./users/users.service.js');
const mailer = require('./mailer/mailer.service');

module.exports = function (app) {
  app.configure(mailer);
  app.configure(expenses);
  app.configure(incomes);
  app.configure(users);
};
