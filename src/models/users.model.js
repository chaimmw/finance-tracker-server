// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({

    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, unique: true},
    password: {type: String, required: true},


    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},

  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
