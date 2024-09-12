require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Veritabanı bağlantısı
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });

// JSON verilerini işlemek için middleware
app.use(express.json());

// Statik dosyaları sunmak için
app.use(express.static(path.join(__dirname, 'personal-financial-frontend', 'build')));

// Tüm diğer route'ları React uygulamanızın index.html dosyasına yönlendirir
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'personal-financial-frontend', 'build', 'index.html'));
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
