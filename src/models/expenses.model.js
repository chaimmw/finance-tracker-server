
// expenses-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const expenses = new Schema({


    /**
     * user associated with record
     */
    userId: {type: mongooseClient.Schema.Types.ObjectId, required: true},

    /**
     * which month expenses for, short name of month
     * Jan, Feb, Mar etc
     */
    month: {type: Number, required: true},

    /**
     * which year expenses were for
     */
    year: {type: Number, required: true},

    /**
     *  food, groceries
     */
    food: {type: Number, default: 0},

    /**
     * household e.g. plasticware, soap, (mothly necessites
     */
    household: {type: Number, default: 0},

    /**
     *  gas for car
     */
    gas: {type: Number, default: 0},

    /**
     *  things for the house, stuff that will be used
     *  permanently house maintenance/ repair
     */
    home: {type: Number, default: 0},

    /**
     * clothing for everybody
     */
    clothing: {type: Number, default: 0},

    /**
     * miscelaneous stuff occaasional purchases doesn't happen frequently
     * trips etc
     *
     */
    misc: {type: Number, default: 0},

    /**
     * utiliies include phone water
     * sewer, gas electric
     */
    utilities: {type: Number, default: 0},


    /**
     * mortgage from ffl
     */
    mortgage: {type: Number, default: 0},

    /**
     * can include tuition, childcare,camp
     */
    tuition: {type: Number, default: 0},


    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},

  }, {
    timestamps: true
  });

  return mongooseClient.model('expenses', expenses);
};
