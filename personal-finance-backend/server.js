const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// JSON verilerini işlemek için middleware
app.use(express.json());

// API route'larını buraya ekleyin (örneğin: /api/transactions)

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
