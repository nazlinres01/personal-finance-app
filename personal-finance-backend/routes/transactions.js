// routes/transactions.js
const express = require('express');
const Transaction = require('../models/transaction');
const router = express.Router();

// Tüm işlemleri listeleyen GET endpointi
router.get('/', async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    next(err);
  }
});

// Yeni bir işlem ekleyen POST endpointi
router.post('/', async (req, res, next) => {
  try {
    const transaction = new Transaction(req.body);
    const newTransaction = await transaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    next(err);
  }
});

// Bir işlemi güncelleyen PUT endpointi
router.put('/:id', async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (transaction) {
      Object.assign(transaction, req.body);
      const updatedTransaction = await transaction.save();
      res.json(updatedTransaction);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (err) {
    next(err);
  }
});

// Bir işlemi silen DELETE endpointi
router.delete('/:id', async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (transaction) {
      await transaction.remove();
      res.json({ message: 'Transaction deleted' });
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
