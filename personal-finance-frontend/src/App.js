// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import TransactionPage from './pages/TransactionPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/transactions" component={TransactionPage} />
    </Switch>
  </Router>
);

export default App;
