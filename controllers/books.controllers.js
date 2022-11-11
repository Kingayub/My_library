const Books = require("../models/Books.model")


module.exports.BooksController = {
    addBooks: (req, res) => {
        Books.create({
            name: req.body.name,
            author: req.body.author,
            genres: req.body.genres
        }).then((b) => {
            res.json(b)
        }).catch({ "error": "not added book" })
    },
    deleteBooks: (req, res) => {
        Books.findByIdAndRemove(req.params.Bookid).then(() => {
            res.json("books deleted")
        })
    },
    updateBooks: (req, res) => {
        Books.findByIdAndUpdate({ name: req.body.name, author: req.body.author, genres: req.body.genres }, { new: true }).then((b) => {
            res.json(b)
        }).catch({ "error": "not update book" })
    },
    getBookById: (req, res) => {
        Books.findById(req.params.id).then((b) => {
            res.json(b)
        })
    },
    getAllBooks: (req, res) => {
        Books.find().then((b) => {
            res.json(b)
        })
    },
    getAllBooksOfGenres: (req, res) => {
        Books.find({ genre: req.params.genreId }).then((b) => {
            res.json(b)
        })
    }
}