// src/components/TransactionForm.js
import React, { useState } from 'react';
import { addTransaction } from '../services/api';

const TransactionForm = ({ onAdd }) => {
  const [type, setType] = useState('income');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTransaction = { type, category, amount, description };
      await addTransaction(newTransaction);
      onAdd();
    } catch (err) {
      console.error('Failed to add transaction', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
