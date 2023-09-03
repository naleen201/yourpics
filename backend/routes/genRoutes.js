const express = require("express");
const router = express.Router();
const {getDetails} = require("../controllers/genController");
const authenticateToken = require("../middleware/authecticateToken");

router.get("/profile", authenticateToken, getDetails);

module.exports = router;
