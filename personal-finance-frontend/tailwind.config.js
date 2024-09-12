// tailwind.config.js
module.exports = {
  mode: 'jit', // Just-In-Time (JIT) modu etkinleştirir
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Kullanılmayan CSS sınıflarını temizlemek için dosya yolları
  darkMode: false, // 'media', 'class' veya false değer alabilir
  theme: {
    extend: {
      colors: {
        customColor: '#123456', // Özelleştirilmiş bir renk
      },
      spacing: {
        '128': '32rem', // Özelleştirilmiş bir boşluk
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // 'active' durumları için arka plan rengini genişletir
    },
  },
  plugins: [],
};
