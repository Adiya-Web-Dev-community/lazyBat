const mongoose = require("mongoose");

const userAccountSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

module.exports = mongoose.Model("user", userAccountSchema);
