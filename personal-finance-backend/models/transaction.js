// models/transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: { type: String, enum: ['income', 'expense'], required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

// Koleksiyon adı burada 'transactions' olarak belirlenmiştir
const Transaction = mongoose.model('Transaction', transactionSchema, 'transactions');

module.exports = Transaction;
