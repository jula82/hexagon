const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
});

module.exports = BookSchema;