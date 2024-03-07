const express = require("express");
const router = express.Router();
var multer = require('multer')
const {loginUser, logoutUser, signupUser} = require("../controllers/authController");

const {uploadProfilePicture} = require("../middleware/imagesMiddleware/imageUpload");

router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/signup").post(uploadProfilePicture.single('profilePicture'),signupUser);

module.exports = router;
