const express = require("express");
const router = express.Router();
const { loginUser, signupUeser } = require("../controllers/userController");

// loging route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUeser);

module.exports = router;
