const mongoose = require('mongoose');

const ImageDetailsSchema = new mongoose.Schema({
  userId : { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'userLoginDetails' 
    },
  imageId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'imagesByUsers' 
    },
  imageType: String,
  imageURL: String,
  imageTag: {
    type: [String],
    default: []
  },
},{
    collection: 'imageDetails',
    timestamps: true
});

module.exports = ImageDetailsSchema;