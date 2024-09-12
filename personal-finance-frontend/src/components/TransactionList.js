// src/components/TransactionList.js
import React from 'react';
import { deleteTransaction } from '../services/api';

const TransactionList = ({ transactions, onUpdate }) => {
  const handleDelete = async (id) => {
    try {
      await deleteTransaction(id);
      onUpdate();
    } catch (err) {
      console.error('Failed to delete transaction', err);
    }
  };

  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction._id}>
          {transaction.type}: {transaction.category} - ${transaction.amount}
          <button onClick={() => handleDelete(transaction._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
