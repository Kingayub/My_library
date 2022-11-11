const mongoose = require("mongoose")

const BooksRevievSchema = mongoose.Schema({
    text: String,
    authorReviev: String,
    books: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'books'
    }
})

const BooksReviev = mongoose.model('Booksreviev', BooksRevievSchema)
module.exports = BooksReviev