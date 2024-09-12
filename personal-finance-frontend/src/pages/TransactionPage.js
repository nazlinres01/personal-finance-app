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
    <div>
      <h1>Transactions</h1>
      <TransactionForm onAdd={fetchTransactions} />
      <TransactionList transactions={transactions} onUpdate={fetchTransactions} />
    </div>
  );
};

export default TransactionPage;
