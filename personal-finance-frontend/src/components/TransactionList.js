// src/components/TransactionList.js
import React from 'react';

const TransactionList = ({ transactions, onUpdate }) => (
  <div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transaction List</h2>
    <ul className="space-y-4">
      {transactions.map((transaction) => (
        <li key={transaction._id} className="bg-white p-4 shadow-md rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-gray-800 font-medium">{transaction.description}</span>
            <span className="text-gray-600">${transaction.amount}</span>
          </div>
          <button
            onClick={() => onUpdate(transaction._id)}
            className="mt-2 text-blue-500 hover:text-blue-600 transition duration-300"
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default TransactionList;
