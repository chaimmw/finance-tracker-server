const mongoose = require('mongoose');

module.exports = function (app) {
  mongoose.connect(app.get('mongodb'));

  /**
   * removed
   * , {
    useMongoClient: true
  }
   no longer necessary in mongoose vrs 5
   */
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
