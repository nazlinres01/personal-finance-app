// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/transactions';

export const getTransactions = () => axios.get(API_URL);
export const addTransaction = (transaction) => axios.post(API_URL, transaction);
export const updateTransaction = (id, transaction) => axios.put(`${API_URL}/${id}`, transaction);
export const deleteTransaction = (id) => axios.delete(`${API_URL}/${id}`);
