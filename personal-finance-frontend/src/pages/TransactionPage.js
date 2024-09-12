// src/pages/TransactionPage.js
import React, { useState, useEffect } from 'react';
import { getTransactions } from '../services/api';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const response = await getTransactions();
      setTransactions(response.data);
    } catch (err) {
      console.error('Failed to fetch transactions', err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Transactions</h1>
        <TransactionForm onAdd={fetchTransactions} />
        <div className="mt-8">
          <TransactionList transactions={transactions} onUpdate={fetchTransactions} />
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
