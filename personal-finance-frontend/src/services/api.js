import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getTransactions = () => axios.get(`${API_URL}/transactions`);
export const addTransaction = (transaction) => axios.post(`${API_URL}/transactions`, transaction);
export const updateTransaction = (id, transaction) => axios.put(`${API_URL}/transactions/${id}`, transaction);
export const deleteTransaction = (id) => axios.delete(`${API_URL}/transactions/${id}`);
