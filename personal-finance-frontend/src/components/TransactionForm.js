// src/components/TransactionForm.js
import React, { useState } from 'react';

const TransactionForm = ({ onAdd }) => {
  const [transaction, setTransaction] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to add transaction
    onAdd();
    setTransaction('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="transaction" className="text-gray-700">Transaction</label>
        <input
          id="transaction"
          type="text"
          value={transaction}
          onChange={(e) => setTransaction(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter transaction description"
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="amount" className="text-gray-700">Amount</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter amount"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
