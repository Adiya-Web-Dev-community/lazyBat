const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  orderId: { type: String },
});

module.exports = mongoose.model("");
