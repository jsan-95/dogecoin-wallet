const mongoose = require('mongoose');
const { Schema } = mongoose;

const TransactionSchema = new Schema({
  address: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, default: Date.now},
});

module.exports = mongoose.model('Transaction', TransactionSchema);
