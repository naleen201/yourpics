const express = require("express");
const router = express.Router();
const {loginUser,logoutUser,signupUser} = require("../controllers/authController");

router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/signup").post(signupUser);

module.exports = router;