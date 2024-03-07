const mongoose = require('mongoose');

const ImagesByUsersSchema = new mongoose.Schema({
  userId : { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'userLoginDetails' 
    },
  imageId: String,
  imageType: String,
  imageURL: String
},{
  collection: 'imagesByUsers',
  timestamps: true
});

module.exports = ImagesByUsersSchema;