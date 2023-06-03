// main.js

const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./infrastructure/database/mongoose');
const BookService = require('./application/services/BookService');
const BookRepository = require('./adapters/persistence/repositories/BookRepositoryImpl');
const BookController = require('./adapters/api/controllers/BookController');

// Połączenie z bazą danych
connectToDatabase();

const app = express();
app.use(bodyParser.json());

// Inicjalizacja repozytorium i serwisu książek
const bookRepository = new BookRepository();
const bookService = new BookService(bookRepository);

// Routing dla kontrolera książek
const bookController = new BookController(bookService);
app.use('/books', bookController.getRouter());

// Serwer nasłuchujący na porcie 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
