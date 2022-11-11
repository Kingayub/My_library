const Author = require("../models/Authors.model")

module.exports.authorController = {
    addAuthor: (req, res) => {
        Author.create({
            author: req.body.author,
            infoAboutAuthors: req.body.infoAboutAuthors
        }).then((a) => {
            res.json(a)
        })
    },
    deleteAuthor: (req, res) => {
        Author.findByIdAndRemove(req.params.id).then(() => {
            res.json("Author deleted")
        })
    },
    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate(req.params.id,
            {
                author: req.body.author,
                infoAboutAuthors: req.body.infoAboutAuthors
            }, { new: true }).then((a) => {
                res.json(a)
            })
    },
    getAllAuthors: (req, res) => {
        Author.find().then((a) => {
            res.json(a)
        })
    }
}