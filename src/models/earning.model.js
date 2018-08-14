

module.exports = function (app) {
  const mongoose = app.get('mongooseClient');
  const earningSchema = new mongoose.Schema({

    /**
     * amount of paycheck/payment
     */
    amount: {type: Number, required: true},

    /**
     * what/who earning is for usaully cm or rl,
     *  can also be tax return etc..
     */
    earningDesc: {type: String, required: false},


    createdAt: {type: Date, default: Date.now, index: true},
    updatedAt: {type: Date, default: Date.now, index: true}
  }, {
    timestamps: true,
  });

  return earningSchema;
};
