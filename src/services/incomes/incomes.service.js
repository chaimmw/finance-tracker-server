// Initializes the `incomes` service on path `/incomes`
const createService = require('feathers-mongoose');
const createModel = require('../../models/incomes.model');
const hooks = require('./incomes.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'incomes',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/incomes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('incomes');

  service.hooks(hooks);
};
