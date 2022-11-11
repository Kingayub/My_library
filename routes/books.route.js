const { BooksController } = require("../controllers/books.controllers")
const { Router } = require("express")
const route = Router();


route.get('/books', BooksController.getAllBooks)
route.get('/books', BooksController.getAllBooksOfGenres)
route.get('/books/:id', BooksController.getBookById)
route.post('/books', BooksController.addBooks)
route.delete('/books/:Bookid', BooksController.deleteBooks)
route.patch('/books/:id', BooksController.updateBooks)

module.exports = route