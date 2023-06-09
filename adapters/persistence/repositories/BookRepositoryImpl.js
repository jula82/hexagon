const mongoose = require('mongoose');
const BookPort = require('../../../application/ports/BookPort');
const BookSchema = require('../../../domain/models/BookSchema');

const BookModel = mongoose.model('Book', BookSchema);

class BookRepositoryImpl extends BookPort {
  getAll() {
    return BookModel.find().exec();
  }

  getById(id) {
    return BookModel.findById(id).exec();
  }

  create(book) {
    const newBook = new BookModel(book);
    return newBook.save();
  }

  update(id, book) {
    return BookModel.findByIdAndUpdate(id, book, { new: true }).exec();
  }

  delete(id) {
    return BookModel.findByIdAndDelete(id).exec();
  }
}

module.exports = BookRepositoryImpl;
