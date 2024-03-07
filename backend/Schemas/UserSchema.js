const mongoose = require('mongoose');

const UserLoginDetailsSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
},{
    collection: 'userLoginDetails',
    timestamps: true
});

module.exports = UserLoginDetailsSchema;