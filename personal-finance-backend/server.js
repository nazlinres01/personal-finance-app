// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const transactionRoutes = require('./routes/transactions');
const errorHandler = require('./middleware/errorHandler');
const db = require('./db');

const app = express();
const PORT = 3001;

// JSON verilerini işlemesi için Express'e built-in middleware ekliyoruz
app.use(bodyParser.json());
app.use(cors());

// MongoDB bağlantısı
db.connect();

// İşlem rotalarını kullanıyoruz
app.use('/api/transactions', transactionRoutes);

// Hata işleme middleware'ini kullanıyoruz
app.use(errorHandler);

// Ana sayfa
app.get('/', (req, res) => {
  res.send('Welcome to the Personal Finance API!');
});

// Sunucuyu başlatıyoruz
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
