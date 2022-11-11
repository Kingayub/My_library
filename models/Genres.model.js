const mongoose = require("mongoose")
const GenresSchema = mongoose.Schema({
    nameGenres: String,
    descriptionGenres: String
})

const Genres = mongoose.model('Genre', GenresSchema)

module.exports = Genres