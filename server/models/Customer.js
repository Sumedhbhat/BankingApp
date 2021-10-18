const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CustSchema = new Schema({
  name: String,
  email: String,
  balance: Number,
});

const Customer = mongoose.model("Customer", CustSchema);

module.exports = Customer;
