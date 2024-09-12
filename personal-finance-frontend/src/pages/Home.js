// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Personal Finance App</h1>
    <p>
      <Link to="/transactions">View Transactions</Link>
    </p>
  </div>
);

export default Home;
