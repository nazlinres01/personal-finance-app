// db.js
const mongoose = require('mongoose');

const uri = 'mongodb+srv://user1:iwJhRfTYRXD00voZ@cluster0.1eixqqa.mongodb.net/personal-finance?retryWrites=true&w=majority';

const connect = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

module.exports = { connect };
