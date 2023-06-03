const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose.connect('mongodb+srv://juladays:nX2mPEAS0QvxBL3V@cluster0.bbpo12w.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'bookstore'
  });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'Connection error:'));
  db.once('open', () => {
    console.log('Connected to the database');
  });
};

module.exports = connectToDatabase;