const mongoose = require("mongoose")

const BooksSchema = mongoose.Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre'
    }
})

const Books = mongoose.model('Book', BooksSchema)
module.exports = Books