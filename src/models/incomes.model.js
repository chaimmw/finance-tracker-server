
// incomes-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {

  // const earning = require('./earning.model')(app);

  const mongooseClient = app.get('mongooseClient');


  const { Schema } = mongooseClient;
  const incomes = new Schema({


    /**
     * user associated with record
     */
    userId: {type: mongooseClient.Schema.Types.ObjectId, required: true},

    /**
     * which month salary was received for
     * short name of month
     * Jan, Feb, Mar etc.
     */
    month: {type: String, required: true},

    /**
     * which year salary was received for
     */
    year: {type: Number, required: true},

    /**
     * list of incomes, paychecks misc
     */
    earnings: {type: Number, required: true},

    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},

  }, {
    timestamps: true
  });

  return mongooseClient.model('incomes', incomes);
};
