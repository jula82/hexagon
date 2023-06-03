class BookService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
  
    getAllBooks() {
      return this.bookRepository.getAll();
    }
  
    getBookById(id) {
      return this.bookRepository.getById(id);
    }
  
    createBook(book) {
      return this.bookRepository.create(book);
    }
  
    updateBook(id, book) {
      return this.bookRepository.update(id, book);
    }
  
    deleteBook(id) {
      return this.bookRepository.delete(id);
    }
  }
  
  module.exports = BookService;
  