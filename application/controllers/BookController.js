const express = require('express');

class BookController {
  constructor(bookService) {
    this.bookService = bookService;
    this.router = express.Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    console.log('initilize');
    this.router.get('/', this.getAllBooks.bind(this));
    this.router.get('/:id', this.getBookById.bind(this));
    this.router.post('/', this.createBook.bind(this));
    this.router.put('/:id', this.updateBook.bind(this));
    this.router.delete('/:id', this.deleteBook.bind(this));
  }

  async getAllBooks(req, res) {
    try {
        const books = await this.bookService.getAllBooks();
        res.json(books);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async getBookById(req, res) {
      const { id } = req.params;
  
      try {
        const book = await this.bookService.getBookById(id);
        if (!book) {
          return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async createBook(req, res) {
      const { title, author } = req.body;
  
      try {
        const newBook = await this.bookService.createBook({ title, author });
        res.status(201).json(newBook);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async updateBook(req, res) {
      const { id } = req.params;
      const { title, author } = req.body;
  
      try {
        const updatedBook = await this.bookService.updateBook(id, { title, author });
        if (!updatedBook) {
          return res.status(404).json({ message: 'Book not found' });
        }
        res.json(updatedBook);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async deleteBook(req, res) {
      const { id } = req.params;
  
      try {
        await this.bookService.deleteBook(id);
        res.sendStatus(204);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    getRouter() {
      return this.router;
    }
  }
  
  module.exports = BookController;
  