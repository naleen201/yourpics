var aws = require('aws-sdk')
var multer = require('multer')
var multerS3 = require('multer-s3')

var s3 = new aws.S3({
   accessKeyId: process.env.AWS_ACCESS_KEY,
   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
   Bucket: "yourpicsimages"
})
var uploadProfilePicture = multer({
   storage: multerS3({
       s3: s3,
       bucket:"yourpicsimages",
       contentType: multerS3.AUTO_CONTENT_TYPE,
       metadata: function (req, file, cb) {
           cb(null, { fieldName: file.fieldname });
       },
       key: function (req, file, cb) {
           cb(null, 'ProfilePictures/' + Date.now().toString() + '-' + file.originalname);
       }
   })
})
var uploadImage = multer({
    storage: multerS3({
        s3: s3,
        bucket:"yourpicsimages",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, 'UploadedImages/' + Date.now().toString() + '-' + file.originalname);
        }
    })
 })
module.exports = {uploadProfilePicture, uploadImage};