const User = require("../models/userModel");

// login user
const loginUser = async (req, res) => {
  res.json({ message: "user Login" });
};

// signup user
const signupUeser = async (req, res) => {
  res.json({ message: "user signup" });
};

module.exports = { loginUser, signupUeser };
