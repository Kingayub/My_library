const Books = require('../models/BooksReviev.model')

module.exports.booksRevievController = {
    addReviev: (req, res) => {
        Books.create({
            text: req.body.text,
            authorReviev: req.body.author,
            books: req.body.books
        }).then((a) => {
            res.json(a)
        }).catch({ "error": "not added bookReviev" })
    },
    getReviev: (req,res)=> {
        Books.find().then((a)=> {
            res.json(a)
        }).catch({ "error": "not getted bookReviev" })
    },
    deleteReviev: (req,res)=> {
        Books.findByIdAndDelete(req.params.id).then((a)=> {
            res.json(a)
        })
    }
}