// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Personal Finance App</h1>
      <p className="text-gray-700 mb-6">
        Welcome to your personal finance manager. Keep track of your expenses, income, and budget with ease.
      </p>
      <Link
        to="/transactions"
        className="inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition duration-300"
      >
        View Transactions
      </Link>
    </div>
  </div>
);

export default Home;
