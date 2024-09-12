// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TransactionPage from './pages/TransactionPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transactions" element={<TransactionPage />} />
    </Routes>
  </Router>
);

export default App;
