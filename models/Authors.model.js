const mongoose = require("mongoose")
const AuthorsSchema = mongoose.Schema({
    author: String,
    infoAboutAuthors: String
})

const Author = mongoose.model('Author', AuthorsSchema)
module.exports = Author